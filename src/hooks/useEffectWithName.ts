
import {
    useEffect,
    EffectCallback,
    memo,
    PropsWithChildren,
    FunctionComponent
} from "react";

export const useComponentDidMount = (cb: EffectCallback) => useEffect(cb, []);

export const useComponentDidUpdate = (cb: EffectCallback) => useEffect(cb);

type Props<P> = Readonly<PropsWithChildren<P>>;

export interface IuseShouldComponentUpdate<P> {
    Component: FunctionComponent<P>;
    condition: (
        prevProps: Props<P>,
        nextProps: Props<P>
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



