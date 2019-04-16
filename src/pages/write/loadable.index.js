import React from "react";
import Loadable from "react-loadable";
import { FullPageLoading } from "../../common/fullPageLoading";


// const LoadableComponent = Loadable({
//   loader: () => import('./'),
//   loading() {
//     return <FullPageLoading />
//   },
// });

class LoadableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
    };
  }
  componentDidMount() {
    import('./index')
      .then((WriteComponent) => {
        this.setState({ component: WriteComponent });
      })
  }
  render() {
    const { component: LazyComponent } = this.state;
    return (
      <Fragment>
        {LazyComponent ? <LazyComponent {...this.props} /> : <FullPageLoading />}
      </Fragment>
    );
  }
}

export default () => <LoadableComponent />