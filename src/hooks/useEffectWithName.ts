import {
    useEffect,
    EffectCallback,
    memo,
    PropsWithChildren,
    FunctionComponent
} from "react";


export const useComponentDidMount = (cb: EffectCallback) => {
    useEffect(cb, []);
};

export const useComponentDidUpdate = (cb: EffectCallback) => {
    useEffect(cb);
};

export interface IuseShouldComponentUpdate<P> {
    Component: FunctionComponent<P>;
    condition: (
        prevProps: Readonly<PropsWithChildren<P>>,
        nextProps: Readonly<PropsWithChildren<P>>
    ) => boolean;
}

export const useShouldComponentUpdate = <P>({
    Component,
    condition
}: IuseShouldComponentUpdate<P>) => {
    memo(Component, condition);
};

export const useComponentWillUnmount = (cb: EffectCallback) => {
    useEffect(() => {
        return () => {
            cb();
        };
    }, []);
};



