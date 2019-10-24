import React from "react";
import ReactDOM from "react-dom";

class ChildWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            container: null,
            window: null
        };
    }

    async componentDidMount() {
        let container = document.createElement("div");
        let window = await this.props.fin.Window.create(
            this.props.windowOptions
        );
        this.props.setChildRef(window);
        window.getWebWindow().document.title = this.props.windowOptions.name;
        window.getWebWindow().document.body.appendChild(container);
        this.setState({ window, container });
    }

    componentWillUnmount() {
        this.state.window.close();
    }

    render() {
        const { container } = this.state;
        if (!container) {
            return null;
        }
        return ReactDOM.createPortal(this.props.children, container);
    }
}

export default ChildWindow;
