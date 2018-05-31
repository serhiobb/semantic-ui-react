import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Login, Register, Profile, Files
  } from 'components';
import Main from "./components/Main"
import {
  Header, Menu, Container, Button, Grid, Icon, Input, Label,
  Sticky, Sidebar, Segment, Form
} from 'semantic-ui-react'
import 'styling/semantic.less';
import './App.css'

//import { Navbar, NavbarBrand, NavbarToggler,
//  Collapse, UncontrolledDropdown,
//  DropdownToggle, DropdownMenu, DropdownItem,
//  Table, TabContent, TabPane,
//  Nav, NavItem, NavLink, Card, Button, CardTitle,
//  CardText, Row, Col, Form, FormGroup, Label,
//  Input, FormText
//} from 'reactstrap';
import classnames from 'classnames';


//class CustomTable extends React.Component {
//  constructor(props) {
//    super(props)
//    this.push = this.push.bind(this);
//    this.clearList = this.clearList.bind(this);
//    this.state = {
//        inline: false
//    }
//  }
//  push(){
//    console.log(document.querySelector('.FormList'));
//  }
//  clearList(){
//    document.querySelectorAll('table tbody tr')
//    .forEach(
//      function(el){
//        if(el.id != undefined) {
//          el.style.display = 'none';
//        }
//      }
//    );
//  }
//  render() {
//    return (
//      <Table className="FormList">
//        <thead>
//          <tr>
//            <th>"#"</th>
//            <th>"email"</th>
//            <th>"password"</th>
//            <th>"select"</th>
//            <th>"selectMulti"</th>
//            <th>"text"</th>
//            <th>"file"</th>
//            <th>"radio1"</th>
//            <th>"checkbox"</th>
//            <th><Button onClick={ () => { this.clearList(); }}>
//            <i className="x"/>
//          </Button></th>
//          </tr>
//        </thead>
//        <tbody>
//        </tbody>
//      </Table>
//    );
//  }
//}
//
//class FormExample extends React.Component {
//  constructor(props) {
//    super(props)
//    this.list = this.list.bind(this);
//    this.state =
//    {
//      countList: 0,
//      param2: 2,
//      inline: false,
//    }
//  }
//
//  list(){
//    var formData = new FormData(document.querySelector('.example'));
//    var fTable  = document.querySelector('.FormList.table');
//
//    console.log()
//    var el = document.createElement('tr');
//    this.setState({ countList: this.state.countList + 1 });
//
//    var td = document.createElement('td');
//      td.textContent = "##";
//      el.appendChild(td);
//    var text;
//    for( var p of formData) {
//      if(p[0] == 'password'){
//        if(p[1].length > 1){
//          text = '***';
//        } else {
//          text = '--\\--';
//        }
//      } else {
//        text = p[1];
//      }
//      var td = document.createElement('td');
//      td.textContent = text;
//      el.appendChild(td);
//    }
//    fTable.children[1].appendChild(el);
//
//    document.querySelectorAll('.FormList.table  td').forEach(
//      function(el){el.onclick = function(evy){
//        evy.target.style.backgroundColor = '#DEDEDE';
//      }}
//    )
//  }
//  toggleInline(){
//    this.setState(prevState => (
//      {
//        param1: 1,
//        param2: 2,
//        inline: !(this.state.inline)
//      }
//    ));
//  }
//
//  render() {
//    return (
//      <Form className="example" action="#">
//        <FormGroup>
//          <Label for="exampleEmail">Email</Label>
//          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//        </FormGroup>
//        <FormGroup>
//          <Label for="examplePassword">Password</Label>
//          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//        </FormGroup>
//        <FormGroup>
//          <Label for="exampleSelect">Select</Label>
//          <Input type="select" name="select" id="exampleSelect">
//            <option>1</option>
//            <option>2</option>
//            <option>3</option>
//            <option>4</option>
//            <option>5</option>
//          </Input>
//        </FormGroup>
//        <FormGroup>
//          <Label for="exampleSelectMulti">Select Multiple</Label>
//          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//            <option>1</option>
//            <option>2</option>
//            <option>3</option>
//            <option>4</option>
//            <option>5</option>
//          </Input>
//        </FormGroup>
//        <FormGroup>
//          <Label for="exampleText">Text Area</Label>
//          <Input type="textarea" name="text" id="exampleText" />
//        </FormGroup>
//        <FormGroup>
//          <Label for="exampleFile">File</Label>
//          <Input type="file" name="file" id="exampleFile" />
//          <FormText color="muted">
//            This is some placeholder block-level help text for the above input.
//            Its a bit lighter and easily wraps to a new line.
//          </FormText>
//        </FormGroup>
//        <FormGroup tag="fieldset">
//          <legend>Radio Buttons</legend>
//          <FormGroup check>
//            <Label check>
//              <Input type="radio" name="radio1" />{' '}
//              Option one is this and that—be sure to include why it's great
//            </Label>
//          </FormGroup>
//          <FormGroup check>
//            <Label check>
//              <Input type="radio" name="radio1" />{' '}
//              Option two can be something else and selecting it will deselect option one
//            </Label>
//          </FormGroup>
//          <FormGroup check disabled>
//            <Label check>
//              <Input type="radio" name="radio1" disabled />{' '}
//              Option three is disabled
//            </Label>
//          </FormGroup>
//        </FormGroup>
//        <FormGroup check>
//          <Label check>
//            <Input type="checkbox" name="checkbox"/>{' '}
//            Check me out
//          </Label>
//        </FormGroup>
//        <Button onClick={() => { this.list(); }}>List</Button>&nbsp;
//        <Input
//        className="btn btn-secondary"
//        type="submit" name="submited"
//        value="Submit"/>&nbsp;
//        <Input
//        className="btn btn-secondary"
//        type="reset" value="Reset"/>
//      </Form>
//    );
//  }
//}


export default class App extends React.Component {render(){
    return(
      <Router>
        <Layout>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/files" component={Files} />
            <Route path="/library" scomponent={Files} />
        </Layout>
      </Router>
    )
  }
}

