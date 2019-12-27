import React from 'react'
import _ from 'lodash'
import { Menu, Label, Tab, Segment, Table, Button, Icon } from 'semantic-ui-react'

export default class Files extends React.Component {
	panes = [
		{menuItem: 'All', render: () =>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Product</Table.HeaderCell>
						<Table.HeaderCell>Subscription</Table.HeaderCell>
						<Table.HeaderCell>Updates</Table.HeaderCell>
						<Table.HeaderCell>&nbsp;</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{this.columns1}
					{this.columns2}
				</Table.Body>
			</Table>
		},
		{
			menuItem: <Menu.Item key='New'>New<Label color="green" floating>4</Label></Menu.Item>,
			render: () =>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Product</Table.HeaderCell>
							<Table.HeaderCell>Subscription</Table.HeaderCell>
							<Table.HeaderCell>Updates</Table.HeaderCell>
							<Table.HeaderCell>&nbsp;</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{this.columns1}
					</Table.Body>
				</Table>
		},
		{
			menuItem: <Menu.Item key='Archive'>Archive<Label color="red" floating>4</Label></Menu.Item>,
			render: () =>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Product</Table.HeaderCell>
							<Table.HeaderCell>Subscription</Table.HeaderCell>
							<Table.HeaderCell>Updates</Table.HeaderCell>
							<Table.HeaderCell>&nbsp;</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{this.columns2}
					</Table.Body>
				</Table>
		}
	]

	columns1 = _.times(4, i => (
		<Table.Row key={i}>
			<Table.Cell>
				.babelrc update development dependencies
			</Table.Cell>
			<Table.Cell>
				10.12.2018
			</Table.Cell>
			<Table.Cell>
				<Icon color="yellow" name="remove"/>
			</Table.Cell>
			<Table.Cell>
				<Button basic color="green">Download</Button>
				<Button basic color="yellow">Prolong</Button>
			</Table.Cell>
		</Table.Row>
	))
	columns2 = _.times(4, i => (
		<Table.Row key={i}>
			<Table.Cell>
				.babelrc update development dependencies
			</Table.Cell>
			<Table.Cell>
				10.12.2018
			</Table.Cell>
			<Table.Cell>
				<Icon color="green" name="checkmark"/>
			</Table.Cell>
			<Table.Cell>
				<Button basic color="yellow" position='right'>Prolong</Button>
			</Table.Cell>
		</Table.Row>
	))
	render() {
		return(
			<div>
		<Tab style={{padding: '20px'}}
				menu={{ attached: false, tabular: false }}
				panes={this.panes} />
			</div>
		)
	}
}
