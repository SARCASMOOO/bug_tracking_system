import React from 'react';

import AuthUserContext from './context';
import Requests, { withRequests } from '../requests';

interface Props {
    requests: Requests;
}

interface State {
    authUser: any;
    listener?: any;
}

const withAuthentication = (Component: React.ElementType) => {
    class WithAuthentication extends React.Component<Props, State> {
        constructor(props: Props) {
            super(props);
            this.state = { authUser: undefined };
        }

        componentDidMount() {
            const cb = (authUser: any) => {
                authUser = authUser ? authUser : null;
                this.setState({ authUser });
            }

            const listener = this.props.requests.createListener(cb);
            this.setState({ listener: listener });
        }

        componentWillUnmount() {
            const listener = this.state.listener;
            if (listener) listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withRequests(WithAuthentication);
};

export default withAuthentication;