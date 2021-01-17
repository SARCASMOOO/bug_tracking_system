// import React, { Dispatch, SetStateAction } from 'react';

// import createGlobalState from "../util/createGlobalState";

// const ErrorContext = React.createContext<[boolean, Dispatch<SetStateAction<boolean>>]>(undefined);

// const GlobalContext = () => {

// }

// export const withError = (Component: React.ComponentType<any>) => (props?: any) => (
//     <ErrorContext.Consumer>
//         {value => <Component {...props} error={value.error} setError={value.setError} />}
//     </ErrorContext.Consumer>
// );

// createGlobalState();
// export default ErrorContext;



// import MovieModel from "../models/MovieModel";
// import CacheManager from "./cacheManager";

// const cache = new CacheManager();
// const nominatedMoviesCache = cache.getNominatedMovies();

// // Global store for the nominated movies
// const [NominatedContext, NominatedProvider] = createGlobalState<MovieModel[]>(nominatedMoviesCache);

// export {NominatedContext, NominatedProvider};
export default {};