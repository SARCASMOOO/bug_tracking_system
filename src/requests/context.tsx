import React from 'react';
import Requests from "./requests";

const RequestsContext = React.createContext<Requests|undefined>(undefined);

export const withRequests = (Component: React.ComponentType<any>) => (props?: any) => (
    <RequestsContext.Consumer>
        {requests => <Component {...props} requests={requests} />}
    </RequestsContext.Consumer>
);

export default RequestsContext;