import avatar from '../../assets/avatar.svg.png';
import './Navbar.css';
const Navbar =({SidebarOpen, openSidebar})=>{
return(

    <nav className="navbar">
    <div className="nav_icon" onClick={()=> openSidebar()}>
     < i className="bi bi-justify" aria-hidden= "true"></i>
    </div>

    <div className="navbar__left">
    <a href="#"> Contabilidade</a>
    <a href="#"> Empresa</a>
    <a href="#"className="active_link"> ADMIN</a>
    </div>

    <div className="navbar__right">
    <a href="#">
    <i className="bi bi-search"></i>
    </a>

    <a href="#">
    <i className="bi bi-clock"></i>
    </a>

    <a href="#">
     <img width="30" src={avatar} alt="avatar"/>
    </a>

    </div>
    </nav>
)



}

export default Navbar;