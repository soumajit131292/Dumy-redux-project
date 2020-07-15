// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import GlobalStore from '../context/globalStore'
import  {LanguageStoreContext} from '../context/languageStore'

const LazyDassDashboard = lazy(() => import("../components/dashboard/dashboard"))
const LazyProfile = lazy(() => import("../components/user/userDetails"))
const LazyLanguage = lazy (()=> import("../components/languageSelect/language"))

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
                       <LanguageStoreContext>
                         <MainLayoutRoutes
                            exact
                            path="/language"
                            render={matchprops => (
                                <Suspense fallback={<Spinner />}>
                                    <LazyLanguage {...matchprops} />
                                </Suspense>
                            )}
                        />
                       </LanguageStoreContext>

                    </Switch>
                </BrowserRouter>
            </GlobalStore>
        );
    }
}
export default Router;