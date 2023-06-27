import React, { useState} from 'react';
import './index.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data); 
  };


  return (
    <div className="app">
      <nav className="navbar">
        <span className="brand">Myntra Users : </span>
        <button className="get-users-btn" onClick={loadUsers}>
          Get Users
        </button>
      </nav>

      <div className="user-grid">
        {users.map(({ id, avatar, last_name, email }) => (
          <div className="user-card" key={id}>
            <img src={avatar} alt={last_name} className="user-avatar" />
            <h3>{`${last_name}`}</h3>
            <p>{email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
