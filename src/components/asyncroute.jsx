// @flow
import React from 'react'

class AsyncRoute extends React.Component <Props, State>{
    state = {
      loaded: false
    };
    componentDidMount() {
      this.props.loadingPromise.then(module => {
        this.component = module.default;
        this.setState({ loaded: true });
      });
    }
    component = null;
    
    render() {
      if (this.state.loaded) {
        return <this.component {...this.props.props} />;
      }
      return <h1>Loading.. Please wait</h1>;
    }
  }
  
export default AsyncRoute

type State = {
    loaded: boolean
}

type Props = {
    loadingPromise : Promise<{ default: Class<React.Component<*,*,*>> }>,
    props: mixed
}