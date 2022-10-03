import { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [username, setUsername] = useState('');
  /*want to change this page to be the login/signup page and get rid of the username input on create exercise and the table */

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username);

    /* 
      axios.post('http://localhost:3000/users/add', user)
        .then(res => console.log(res.data));
    */

    window.location = '/'
  }

  return (
    <div>
      <h3>Add a New User</h3>
      <form onSubmit={ handleSubmit }>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={ username }
              onChange={ event => setUsername(event.target.value) }
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Add User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUser;

