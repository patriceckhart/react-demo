import * as React from "react";
import {Fragment} from "react";
import {Submit, Input, Form} from "../lib";
import Loop from "../essentials/Loop/Loop";
import FetchData from "../backend/FetchData";
import Hidden from "../lib/Hidden/Hidden";
import SelectOption from "../lib/Select/SelectOption";
import Select from "../lib/Select/Select";
import TextArea from "../lib/TextArea/TextArea";

class Test extends React.Component {

    constructor(props) {
        super(props);
		this.state = {
			item: false
		}
		this.submitForm = this.submitForm.bind(this);
		this.getFirst = this.getFirst.bind(this);
    }

	submitForm(e) {

		FetchData('/api/test/update', 'POST', false, false, e.target, true).then(result => {
			console.log(result);
		});
	}

	getFirst() {

		FetchData('/api/test/getfirst', 'GET').then(result => {
			this.setState({item: result.result});
		});
	}

	componentDidMount() {
		this.getFirst();
	}

	render() {

		const {item} = this.state;

        return (
			<Fragment>


				<Form action="test" name="form" attributes={{id: 'testForm'}} onSubmit={(p) => this.submitForm(p)} >

					{item &&
						<Hidden name="test[__identity]" defaultValue={`${item ? item.identifier : ``}`} />
					}

					<Input name="test[name]" attributes={{className: 'form-control', placeholder: 'Firstname'}} defaultValue={`${item ? item.name : ``}`} />

					<Select name="test[foo]" attributes={{className: 'form-select'}} placeholder="Bitte auswählen" >
						<SelectOption label="Foo" value="foo" />
						<SelectOption label="Bar" value="bar" />
						<SelectOption label="Bars" value="bars" />
					</Select>

					<TextArea attributes={{className: 'form-control', placeholder: 'Text'}} />

					<Submit attributes={{className: 'btn btn-secondary'}} >
						Submit form
					</Submit>

				</Form>


			</Fragment>
        );
    }
}

export default Test;
