import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider';

const Signup = () => {
  const { user, signIn, signOut } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>
      <h2>{user ? "Conectado" : "Desconectado"}</h2>

      <button className="btn btn-primary" onClick={signIn}>
        Iniciar sesión
      </button>

    </div>
  );
}

export default Signup