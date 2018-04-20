import React from 'react'
import { Card, Image, Icon, Segment, Form, Button, Label, Grid } from 'semantic-ui-react'

export default class Profile extends React.Component {
	render() {
		return(
			<div>
				<Card style={{margin: '20px'}}>
					<Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
					<Card.Content>
						<Card.Header>
							<Icon name='user' />
							Ivan Ivanov
						</Card.Header>
						<Card.Meta>
							<span>
								@ivanovivan
							</span>
						</Card.Meta>
						<Card.Description>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
							24 products
					</Card.Content>
				</Card>

				<Segment style={{margin: '20px'}}>
					<Grid columns={3} divided>
						<Grid.Column>
							<Form>
								<Form.Group widths={1}>
									<Form.Field>
										<Form.Input label='Name' placeholder='Name' />
									</Form.Field>
									<Form.Field>
										<Form.Input label='Login' placeholder='Login' />
									</Form.Field>
								</Form.Group>
								<Form.Group widths={1}>
									<Form.Field>
										<Form.Input label='Email' placeholder='Email' />
									</Form.Field>
									<Form.Field>
										<Button type='submit'>Change</Button>
									</Form.Field>
								</Form.Group>
							</Form>
						</Grid.Column>
						<Grid.Column>
							<Form>
								<Form.Group widths={1}>
									<Form.Field>
										<Form.Input label='Old password' type="password" />
									</Form.Field>
									<Form.Field>
										<Form.Input label='New password' type="password" />
									</Form.Field>
								</Form.Group>
								<Form.Group widths={1}>
									<Form.Field>
										<Form.Input label='Repeat password' type="password" />
									</Form.Field>
									<Form.Field>
										<Button style={{verticalAlign: 'bottom'}} type='submit'>Change</Button>
									</Form.Field>
								</Form.Group>
							</Form>
						</Grid.Column>
						<Grid.Column>
							<Form>
								<Form.Group widths={1}>
										<Form.Field>
											<Form.Checkbox label="Another option"/>
										</Form.Field>
										<Form.Field>
											<Form.Checkbox label="And another one"/>
										</Form.Field>
								</Form.Group>
							</Form>
						</Grid.Column>
					</Grid>



				</Segment>
			</div>
		)
	}
}

