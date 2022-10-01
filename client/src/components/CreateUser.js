import { useState } from 'react';

function CreateUser() {
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username);

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

