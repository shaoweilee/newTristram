import React from "react";
import Loadable from "react-loadable";
import { FullPageLoading } from "../../common/fullPageLoading";

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <FullPageLoading />
  },
});

export default () => <LoadableComponent />