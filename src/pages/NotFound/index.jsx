import Header from '../../components/Header'
import './styles.css'
export default function MainRoutes() {
  return (
    <>
    <Header />
    <div className="container">
        <div className="error">
          <h1>404 - NOT FOUND</h1>
          <p>A página que procura não está disponivel no momento</p>
          <img src="/lost.svg" alt="pessoa perdida" />
        </div>
    </div>
    </>
  )
}