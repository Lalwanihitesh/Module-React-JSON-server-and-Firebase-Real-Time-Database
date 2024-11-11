import axios from 'axios';
import React, { useState } from 'react'

function Home() {
  const [users,setusers]= useState([]);


  const adduser =()=>{
    axios.get('http://localhost:5000/users')
    .then(Response =>setusers (Response.data))
    catch(error =>console.error(Error fetching data:',error'))
  }
  return (
   

    <><div style={{ backgroundColor: '#000080' }}>
      <div>
        <h1 style={{ textAlign: 'center', color: 'white' }}>React Crud Opration</h1>
      </div>
      <div>
        <h1 style={{ textAlign: 'center', color: 'yellow' }}><span>&#123;JSON Server&#125;</span></h1>
      </div>
      <div style={{
        backgroundColor: '#add8e6', color: '#0000ff', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '10px 20px',
        transform: 'rotate(-25deg)', display: 'inline-block', borderRadius: '8px', position: 'relative', top: '-10px', left: '150vh',
      }}>Router</div>;
      <div style={{
        color: 'yellow', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '10px 20px',
        transform: 'rotate(-25deg)', display: 'inline-block', borderRadius: '8px', position: 'relative', top: '200px', right: '140px',
      }}>API</div>;
      <div style={{
        color: '#add8e6', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '10px 20px',
        transform: 'rotate(-25deg)', display: 'inline-block', borderRadius: '8px', position: 'relative', top: '250px', right: '40vh',
      }}>Axios</div>;
      <div>
        <button onClick={adduser} type="button" class="btn btn-success">Add User</button>
      </div>
    </div><table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">User First Name</th>
            <th scope="col">User Last Name</th>
            <th scope="col">User Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" class="btn btn-warning" style={{ margin: '2px' }}>Warning</button>
              <button type="button" class="btn btn-danger">Danger</button>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td><button type="button" class="btn btn-warning" style={{ margin: '2px' }}>Warning</button>
              <button type="button" class="btn btn-danger">Danger</button>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td><button type="button" class="btn btn-warning" style={{ margin: '2px' }}>Warning</button>
              <button type="button" class="btn btn-danger">Danger</button>
            </td>
          </tr>
        </tbody>
      </table>
      </>

  )
}

export default Home