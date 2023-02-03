import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Loop extends React.Component {

	constructor(props) {
		super(props);
		this.injectItems = this.injectItems.bind(this);
	}

	injectItems() {
		const items = this.props.items;
		const children = this.props.children;
		console.log(children)
	}

	componentDidMount() {
		this.injectItems();
	}

	render() {

		const {items, log, children} = this.props;

		if(log === true) {
			console.log(items);
		}

		return (
			<Fragment>
				{children && ''}
				{/*{Object.keys(items).map((item, i) =>*/}
				{/*	<li>*/}
				{/*		{Object.values(items)[i]['firstname']} {Object.values(items)[i]['lastname']}*/}
				{/*	</li>*/}
				{/*)}*/}
			</Fragment>
		);
	}
}

Loop.propTypes = {
	items: PropTypes.object,
	log: PropTypes.bool
};

Loop.defaultProps = {
	log: false
};

export default Loop;
