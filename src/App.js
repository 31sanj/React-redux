import React from 'react';
import { connect } from 'react-redux';
import Users from './users/Users';
import './App.css';
import {
	selectUserData
} from './redux/users/users.selector';
import { addUserData, delUserData } from './redux/users/users.actions';


function App(props) {
  console.log(props)
  let id = 0;
  const addUser = (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault();
    }
    const form = new FormData(evt.target);
    let postData = {};
    for(let pair of form.entries()) {
        postData[pair[0]] =  pair[1]; 
    }
    props.addUserData(postData)

    postData.id = props.users.length ===0 ? id+1 : props.users.length+1;

    evt.target.reset();

  }
  

  return (
    <div className="App">
        <form onSubmit={addUser}>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="email" placeholder="email@gmail.com"/>
            <button className="submit-btn">SAVE</button>
        </form>
        <Users users={props.users} deleteUser={props.delUserData}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  const { session } = state;
  return {
    checked: session.checked,
    authenticated: session.authenticated,
    users : selectUserData(state.userData.users)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addUserData: user => dispatch(addUserData(user), delUserData(user.id)),
    delUserData: id => dispatch(delUserData(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
