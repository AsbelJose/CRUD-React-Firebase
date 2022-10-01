import { collection, doc, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const getUsers = async () => {
      const data = await getDocs( collection(db, 'usuarios'));
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    };
    getUsers();
  }, [])
  
  console.log(users);
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div key='user.id'>
            {" "}
            <h1>Name: {user.nombre}</h1>
            <h1>Age: {user.edad}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default App;
