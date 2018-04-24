import React from 'react'
import TextInput from './TextInput.js'
import { 
	Card, Image, Icon, Segment, Form, Button, Label, Grid,
  Checkbox, Divider
} from 'semantic-ui-react'

export default class Profile extends React.Component {
	render() {
		return(
			<div>
			<div style={{width: "320px", height: "240px"}}>
				<Image circular={true} src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
			</div>
				<Card style={{margin: '20px'}}>
					
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
							<Form>
								<TextInput label='Name' placeholder='Name' />
								<TextInput label='Login' placeholder='Login' />
								<TextInput label='Email' placeholder='Email' />
							</Form>
					<Divider/>
							<Form>
<TextInput label='Old password' type="password" />
<TextInput label='New password' type="password" />
<TextInput label='Repeat password' type="password" />
<Button basic color="yellow" style={{verticalAlign: 'bottom'}} type='submit'>Change</Button>
							</Form>
					<Divider/>
							<Form>
<Checkbox slider label="Another option"/>
<Checkbox slider label="And another one"/>
							</Form>
				</Segment>
			</div>
		)
	}
}

