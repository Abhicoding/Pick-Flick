// @flow
import React from 'react'

const AsyncComponent = (importComponent: Function) => {
    return class extends React.Component<any, any> {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props}/> : <h1></h1>;
        }
    }
};

export default AsyncComponent