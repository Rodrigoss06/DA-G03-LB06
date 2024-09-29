import React, {useState,useEffect} from 'react'
import axios from "axios";
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data); 
        })
        .catch(error => {
          console.error("Hubo un error al obtener los datos: ", error);
        });
    }, []);
  
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
        <div className="grid grid-cols-4 gap-4 font-bold bg-gray-200 p-2">
          <div>ID</div>
          <div>Nombre</div>
          <div>Email</div>
          <div>Teléfono</div>
        </div>
        {users.map(user => (
          <div key={user.id} className="grid grid-cols-4 gap-4 border-b p-2">
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </div>
        ))}
      </div>
    );
}

export default Users