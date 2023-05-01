import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserProvider';

const Navbar = () => {
  const { user, signOut } = useContext(UserContext);
  return (
    <div>
      <NavLink to="/">Notes</NavLink>
      {
        user ?
          <button onClick={signOut}>Cerrar Sesión</button>
          :
          <></>
      }
    </div>
  )
}

export default Navbar