import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import AuthUserContext from './context';
import Requests, { withRequests } from '../requests';
import * as ROUTES from '../routes';

interface Props {
    requests: Requests;
    history: History;
}

interface State {
    listener: any;
}

const withAuthorization = (condition: any) => (Component: React.ElementType) => {
    class WithAuthorization extends React.Component<Props, State> {
        componentDidMount() {
            const cb = (authUser: any) => {
                if (!condition(authUser)) {
                    history.replaceState('Dashboard', 'Dashboard', ROUTES.routePaths.signIn);
                }
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
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return compose<Props, State>(
        withRouter,
        withRequests,
    )(WithAuthorization);
};

export default withAuthorization;
