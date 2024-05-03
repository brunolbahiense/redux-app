import './styles.css'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
      <header>
        <Link to='/'>
          <img src="/logo.svg" alt="an blue hexagon logo" className='logo' />
        </Link>
      </header>   
    )
  }