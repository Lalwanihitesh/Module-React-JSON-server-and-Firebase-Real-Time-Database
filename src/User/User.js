import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addUser = () => {
    const newUser = { firstName: 'new', lastName: 'user', email: 'new@user.com' };
    axios.post('http://localhost:5000/users', newUser)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error('Error adding user:', error));
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>User First Name</th>
            <th>User Last Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button style={{ margin: '5px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Update</button>
                <button onClick={() => handleDelete(user.id)} style={{ margin: '5px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>Delete</button>
                <button style={{ margin: '5px', backgroundColor: 'teal', color: 'white', border: 'none', borderRadius: '5px' }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
