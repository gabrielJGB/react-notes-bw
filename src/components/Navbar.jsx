import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserProvider';

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = async ()=>{
try{
await logOut()
}
catch(error){console.log(error);}
  }

  return (
    <div style={{backgroundColor:"black"}}>
      <NavLink to="/">
        <h1>Notes</h1>
      </NavLink>

      {
        !user ?
          <>
            <NavLink to="/login">
              <h3>Iniciar sesion</h3>
            </NavLink>
            <NavLink to="/signup">
              <h3>Registrarse</h3>
            </NavLink>
          </>
          :
          <div>
            <button onClick={handleLogOut}>Cerrar Sesión</button>
            <p>Hola {user.email}</p>
          </div>

      }

  
    </div>
  )
}

export default Navbar