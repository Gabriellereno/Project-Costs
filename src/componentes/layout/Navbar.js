import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../../img/logo.png'
import styles from '../../componentes/layout/Navbar.module.css'

function Navbar(){
   return (
    <nav className={styles.navbar}>
         <Container>
                    <Link to="/"><img src={logo} alt="Costs"/></Link>
                    <ul className={styles.list}>
                        <li className={styles.item}><Link to="/">Inicio</Link></li>
                        <li className={styles.item}><Link to="/Projects">Projetos</Link></li>
                        <li className={styles.item}><Link to="/Company">Empresa</Link></li>
                        <li className={styles.item}><Link to="/Contato">Contato</Link></li>
                    </ul>
         </Container>
     </nav>
   )
}

export default Navbar