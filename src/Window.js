import React, { Component }  from 'react';
import ReactDOM from 'react-dom';


class Window extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {

        this.appendChild(this.el);
    }

    componentWillUnmount() {
        this.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

export default Window;