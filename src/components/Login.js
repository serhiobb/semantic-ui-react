import React from 'react'
import TextInput from './TextInput.js'
import {
	Icon, Container, Grid, Form, Segment, Button, Message,
	Header, Label, Menu
} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Login extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(event) {
		let authUser = event.target.elements['email'].value
		this.props.onAuthUser(authUser)
	}
	render() {
		return(
			<Container style={{paddingTop: '20px'}}>
				<Segment.Group style={{ margin: "auto", maxWidth: 450 }}>
					<Segment
						textAlign='center'
						style={{ height: '100%' }}
						verticalAlign='middle'>
						<Menu text size='huge' fluid={true}>
							<Menu.Item as={Link} to={'/'} active>
								<Icon name='circle' color="yellow"
								      circular={true} style={{backgroundColor: 'limegreen'}}/>
								<span style={{color: 'goldenrod'}}>LOGO</span>
							</Menu.Item>
							<Menu.Item as={Link} to={'/register'} position='right'>Register</Menu.Item>
						</Menu>
					</Segment>
					<Segment>
						<Header textAlign="center">Login</Header>
						<Form size='large' onSubmit={this.handleSubmit}>
							<Segment basic stacked>
								<TextInput label="email" placeholder="Enter email" name="email"/>
								<Form.Field>
									<Label style={{
										backgroundColor: 'transparent',
										marginLeft: '-10px'
									}}>
										Password
									</Label>
									<Form.Input
										fluid
										transparent
										placeholder='Enter password'
										style={{
											borderBottom: "#999 1px solid",
											paddingBottom: "5px"
										}}
										name='password'
										type='password'
									/>
								</Form.Field>
								<div style={{textAlign: 'center'}}>
									<Button color="green" size='large'>Continue</Button>
								</div>
							</Segment>
						</Form>
					</Segment>
				</Segment.Group>
			</Container>
		)
	}
}

export default connect(
	state => ({
		authUser: state.sessionState.authUser
	}),
	dispatch => ({
		onAuthUser: authUser => dispatch({ type: 'AUTH_USER_SET', authUser })
	})
)(Login)