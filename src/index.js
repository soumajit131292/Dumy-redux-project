// Import External Modules
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
// Import Own Modules

import "font-awesome/css/font-awesome.min.css";
import './index.scss';
import Spinner from "./components/spinner/spinner";

const LazyApp = lazy(() => import("./app/App"));

ReactDOM.render(
   <Suspense fallback={<Spinner />}>
      <LazyApp />
   </Suspense>,
   document.getElementById("root")
);