import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Dashboard, NotFound } from './routes'
import { NavBar, RequireAuth } from './components'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'


const App = () => {
  const {user} = useContext(UserContext)

  if (user === false){
    return (
      <p>Cargando... </p>
    )
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
