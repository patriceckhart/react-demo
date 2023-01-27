import * as React from "react";
import {Fragment} from "react";

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headline2: 'hello'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
		console.log('click');
		const headline2 = this.state.headline2;
		this.setState({headline2: `${headline2} world`});
    }

    render() {

        const {label, children} = this.props;
		const {headline2} = this.state;

        return (
			<Fragment>
				<h1>{label}</h1>
				<h2>{headline2}</h2>
				{children}
				<button type="button" onClick={() => this.handleClick()} >Click!</button>
			</Fragment>
        );
    }
}

export default Test;
