import React from 'react'
import { Button, Comment, Form, Header, Container } from 'semantic-ui-react'
import firebase from './../data/Firebase'; 
import Avatar from 'react-avatar';

export default class Main extends React.Component {
	constructor(props){
		super(props);

		let db_ref = firebase.database().ref('chat/message');
		let comments = this.state.comments;
		
		let firebaseCommentAdded = (snapshot) => {
				//let message = snapshot.val();
				// console.log('new item', {key: snapshot.key, item: snapshot.val()})
				comments.push({key: snapshot.key, item: snapshot.val()});
				console.log(comments);
				this.setState({comments:comments});
			}

		db_ref
			.limitToLast(100)
			.on("child_added", firebaseCommentAdded);

		this.addComment = this.addComment.bind(this);
	}
	state = { comments:[
		{key:'#33', item: {name: "John Doe", date: '13:00', text: 'Whats up?'}}
	]};
	addComment(props) {
		// this.setState( (prevState) => { { comments: prevState.comments.push(
		// 	{date: new Date(), author: 'undefined', text: 'NOPE!'}
		// )} })
		let db_ref = firebase.database().ref('chat/message');

		let item_text = document.querySelector('.ui.reply.form textarea').value;
		let item =  {name: 'anonymous' + Math.ceil(Math.random() * 10), date: (new Date()).toGMTString(), text: item_text};
		db_ref.push(item);
		document.querySelector('.ui.reply.form textarea').value = "";
		// let cc = this.state.comments;
		// cc.push(item);
		// this.setState({comments:cc});
	}
	render() {
		let c_state = this.state || [];
		return (
			<Container>
				<hr/>
				<Comment.Group>
					<Header as='h3' dividing>Comments</Header>

					{c_state.comments.map((c, i) => { 
						if(!c.key || !c.item) return;

					   	let comment = c.item;                
			           // Return the element. Also pass key     
			        	return (
							<Comment key={i} fbkey={c.key}>
								<Avatar className="avatar" size='32' name={comment.name}/>
								<Comment.Content>
									<Comment.Author as="a">{comment.name}</Comment.Author>
									<Comment.Metadata>
										<div>{comment.date}</div>
									</Comment.Metadata>
									<Comment.Text>{comment.text}</Comment.Text>
									<Comment.Actions>
										<Comment.Action>Reply</Comment.Action>
									</Comment.Actions>
								</Comment.Content>
							</Comment>
			           	) 
			        })}

					<Form reply>
						<Form.TextArea />
						<Button onClick={this.addComment} content='Add Reply' labelPosition='left' icon='edit' primary/>
					</Form>
				</Comment.Group>
			</Container>
		)
	}
}