import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { getItem } from './utils/storage'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

const ProtectedRoutes = ({ redirectTo }) => {
  const isAuth = getItem('token')
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />
}

export default function MainRoutes() {
  return (
    <>
      <Routes>
        
        <Route path='/'>
          <Route path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
        </Route>

        <Route path='/Signup' element={<Signup />} />

        <Route element={<ProtectedRoutes redirectTo={'/'}/>}>
          <Route path='/Dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes> 
    </>
  )
}
