import React from 'react';
import data from './data';
const { users } = data;

const Users = () => {
    return (
        <div>
            <h3>User List</h3>
            <div className="user-list list">
                <ul>
                    {users.map(user => {
                        return <li key={user.id}>
                            <strong>{user.name}</strong> from {user.state}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Users;