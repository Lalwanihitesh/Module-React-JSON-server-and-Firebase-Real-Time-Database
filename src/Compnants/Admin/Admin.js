import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div style={{backgroundColor:"navy"}}>
      <h2 style={{textAlign:"center",color:'white'}}>React Crud Opration</h2>
      <nav>
        <button>
        <Link to="add">Add User</Link>
        </button>
        <Link to="manage">Manage Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Admin;
