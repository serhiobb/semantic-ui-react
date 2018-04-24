import React from 'react'
import {
	Menu, Container, Button, Grid, Icon, Input, Label, 
	Sticky, Sidebar, Segment
} from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Layout extends React.Component {
	state = { visibleMenu: true , stickyActive: true }

	toggleMenu = () => this.setState({ visibleMenu: !this.state.visibleMenu })

	render() {
		const { visibleMenu } = this.state
		return(
			<Container fluid style={{height: '100%'}}>
			<Container fluid>
				<Menu borderless={true} size='massive' fluid={true}>
						<Sticky active={true}>
						<Menu.Item as={Button} onClick={this.toggleMenu}>
							<Icon size="big" name='content'/>
						</Menu.Item>
						</Sticky>
						<Menu.Item as={Link} to={'/'} active>
							<Icon name='circle' color="yellow"
							      circular={true} style={{backgroundColor: 'limegreen'}}/>
							<span style={{color: 'goldenrod'}}>LOGO</span>
						</Menu.Item>
						<Menu.Item as={Link} to={'/login'} position='right'>Log in</Menu.Item>
						<Menu.Item as={Link} to={'/register'}>Register</Menu.Item>
				</Menu>
			</Container>
			<Container fluid style={{height: '100%'}}>
			  <Sidebar.Pushable>
					<Sidebar as={Menu} color='grey' inverted={true} animation='slide along'
					         width='thin' visible={visibleMenu} dimmed={true} vertical>
						<Menu.Item as={Link} to={'/'}>
							<Icon name='life ring' />
							Library
						</Menu.Item>
						<Menu.Item as={Link} to={'/files'}>
							<Icon name='folder open' />
							User Content
						</Menu.Item>
						<Menu.Item as={Link} to={'/profile'}>
							<Icon name='setting' />
							Profile
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher id="content">
							<Container fluid>
								{this.props.children}
							</Container>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Container>
		</Container>
		)
	}
}