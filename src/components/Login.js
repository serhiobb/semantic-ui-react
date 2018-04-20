import React from 'react'
import {
	Icon, Container, Grid, Form, Segment, Button, Message,
	Header, Label, Menu
} from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Login extends React.Component {
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
						<Form size='large'>
							<Segment basic stacked>
								<Form.Field>
									<Label style={{
										backgroundColor: 'transparent',
										marginLeft: '-10px'
									}}>
										Email
									</Label>
									<Form.Input
										fluid
										transparent
										placeholder='Enter email'
										style={{
											borderBottom: "#999 1px solid",
											paddingBottom: "5px"
										}}
									/>
								</Form.Field>
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

