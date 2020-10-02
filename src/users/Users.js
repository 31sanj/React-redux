import React from 'react';
import { delUserData } from '../redux/users/users.actions';
import "./Users.css"

const UsersList = ({users=[], deleteUser}) => {

    const handleChange = evt => {
        deleteUser(parseInt(evt.target.dataset.id))
    }


    return (
    <div className="users">
        <div className="d-flex">
            <div className="name-head">Name</div>
            <div className="email-head">Email</div>
        </div>
        {users.length > 0 && users.map((i, idx) => (
            <div key={idx} className="user">
                <div>{i.name}</div>
                <div className="email">{i.email}</div>
                <button data-id={i.id} type="button" onClick={handleChange}>Delete User</button>
            </div>
        ))}
    </div>)
    
}

export default UsersList;