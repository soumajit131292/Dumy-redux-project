// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";


// Import Main Layouts

const LazyDassDashboard = lazy(() => import("../components/dashboard/dashboard"))



class Router extends Component {
    render() {
        return (
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
                    

                </Switch>

            </BrowserRouter>
        );
    }
}
export default Router;