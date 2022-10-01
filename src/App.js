import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from './firebaseConfig';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [NewName, setNewName] = useState("");
  const [NewAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);

  const createUser = async () => {
    await addDoc( collection(db, 'usuarios'), {
      nombre: NewName,
      edad: Number( NewAge )
    })
  }

  const updateUser = async (id, edad) => {
    const userDoc = doc(db, 'usuarios', id);
    const newAge = { edad: edad + 1};
    await updateDoc(userDoc, newAge);
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'usuarios', id);
    await deleteDoc(userDoc);
  }

  useEffect(() => { 
    const getUsers = async () => {
      const data = await getDocs( collection(db, 'usuarios'));
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    };
    getUsers();
  }, [users])


  
  console.log(users);
  return (
    <div className="App">

      <input
        placeholder='Nombre...'
        onChange={ (e) => { setNewName(e.target.value); } }
        >
      </input>
      <input
        type='number'
        placeholder='edad...'
        onChange={ (e) => { setNewAge(e.target.value); } }
        >
      </input>
      <button onClick={ createUser }>Crear usuario</button>

      {users.map((user) => {
        return (
          <div key='user.id'>
            {" "}
            <h1>Name: {user.nombre}</h1>
            <h1>Age: {user.edad}</h1>
            <button onClick={ () => { 
              updateUser( user.id, user.edad )
              }}
              >
                {" "}
                actualizar edad
              </button>
            <button onClick={ () => { 
              deleteUser( user.id )
              }}
              >
                {" "}
                borrar elemento
              </button>
          </div>
          
        )
      })}

    </div>
  );
}

export default App;
