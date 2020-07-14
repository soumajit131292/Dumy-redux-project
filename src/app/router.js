// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import GlobalStore from '../context/globalStore'


const LazyDassDashboard = lazy(() => import("../components/dashboard/dashboard"))
const LazyProfile = lazy(() => import("../components/user/userDetails"))

class Router extends Component {
    render() {
        return (
            <GlobalStore >
                <BrowserRouter basename="/">
                    <Switch>
                        <MainLayoutRoutes
                            exact
                            path="/"
                            render={matchprops => (
                                <Suspense fallback={<Spinner />}>
                                    <LazyDassDashboard {...matchprops} />
                                </Suspense>
                            )}
                        />
                         <MainLayoutRoutes
                            exact
                            path="/dashboard"
                            render={matchprops => (
                                <Suspense fallback={<Spinner />}>
                                    <LazyDassDashboard {...matchprops} />
                                </Suspense>
                            )}
                        />
                         <MainLayoutRoutes
                            exact
                            path="/profile"
                            render={matchprops => (
                                <Suspense fallback={<Spinner />}>
                                    <LazyProfile {...matchprops} />
                                </Suspense>
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </GlobalStore>
        );
    }
}
export default Router;