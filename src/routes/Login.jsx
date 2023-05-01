import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Login = () => {
  const { signIn,user } = useContext(UserContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signIn(email, password)
      
      navigate('/')

    }
    catch (error) { console.log(error.code) }
  }

  if (user) {
    return <Navigate to="/" />;
}


  return (
    <div>
      <h1>Iniciar sesión</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Contraseña'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Iniciar Sesión</button>
      </form>


    </div>
  )
}

export default Login