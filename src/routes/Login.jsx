import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Login = () => {
  const { user, signIn  } = useContext(UserContext);
  const navigate = useNavigate()

  const handleSignIn  =()=>{
    signIn()  
    navigate("/")

  }
  return (
    <div>
      <h1>Login</h1>
      <h2>{user ? "Conectado" : "Desconectado"}</h2>

      <button className="btn btn-primary" onClick={handleSignIn}>
        Iniciar sesión
      </button>

    </div>
  )
}

export default Login