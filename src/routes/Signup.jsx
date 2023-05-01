import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Signup = () => {
  const { signUp, user } = useContext(UserContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate("/")

    }
    catch (error) { console.log(error) }
  }

  if (user) {
    return <Navigate to="/" />;
}

  return (
    <div>
      <h1>Registrarse</h1>

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
        <button type='submit'>Registrarse</button>
      </form>

    </div>
  );
}

export default Signup