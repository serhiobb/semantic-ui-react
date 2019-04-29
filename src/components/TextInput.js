import React from 'react'
import { Card, Image, Icon, Segment, Form, Button, Label, Grid } from 'semantic-ui-react'

export default class TextInput extends React.Component {
	constructor(props){
		super(props);
	}
	state = {
		value: null,
		valid: false
	}
	render() {
		return(
			<Form.Field>
				<Label style={{
					backgroundColor: 'transparent',
					marginLeft: '-10px'
				}}>
					{this.props.label}
				</Label>
				<Form.Input
					fluid
					transparent
					circular
					color="green"
					icon="circle"
					placeholder={this.props.placeholder}
					name={this.props.name}
					style={{
						borderBottom: "#09A  1px solid",
						paddingBottom: "5px"
					}}
				/>
			</Form.Field>
		)
	}
}

