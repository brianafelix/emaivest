import'./Sidebar.css';
import logo from '../../assets/logo.jgp.png';
const Sidebar= ({SidebarOpen, closeSidebar }) =>{

    return(
        <div className={SidebarOpen?"Sidebar-responsive" :""}  id="Sidebar">
        <div className="Sidebar__title">
            <div className="Sidebar__img">
                <img src={logo} alt="logo"/>
                <h1>EMARP Solucoes</h1>
            </div>
            <i 
            onClick={() => closeSidebar()} 
            className="fa fa-times"
            id="SidebarIcon"
            aria-hidden="true"
            ></i>
        </div>
        <div className="Sidebar__menu">
        <div className="Sidebar__link active_menu_link">
        <i class="bi bi-list"></i>
         <a href="#">home</a>
            </div>
            <h2>ADMIN</h2>
            <div className="Sidebar__link">
            <i class="bi bi-speedometer"></i>
         <a href="#">Area administrativa</a></div>

         <div className="Sidebar__link">
            <i className="bi bi-shop"></i>
         <a href="#">lojas</a></div>

         <div className="Sidebar__link">
         <i class="bi bi-bag"></i>
         <a href="#">produtos</a></div>

         <div className="Sidebar__link">
         <i class="bi bi-justify"></i>  
         <a href="#">categorias</a></div>

         <div className="Sidebar__link">
            <i className="fa fa-cutlery"></i>
         <a href="#">pedidos</a></div>
                  <h2>Pessoas</h2>
           <div className="Sidebar__link">
           <i class="bi bi-person-fill"></i> 
         <a href="#">Administrador</a></div>

         <div className="Sidebar__link">
         <i class="bi bi-people-fill"></i>
         <a href="#">Usuarios</a></div>


         <div className="Sidebar__link">
         <i class="bi bi-currency-exchange"></i>
         <a href="#">Pagamentos E Custos </a></div>


         <div className="Sidebar__link">
         <i class="bi bi-list"></i>
         <a href="#">A Plataforma </a></div>



         <div className="Sidebar__link">
         <i class="bi bi-file-earmark-text"></i>
         <a href="#">politica de privacidade</a></div>


         <div className="Sidebar__logout">
         <i class="bi bi-toggle-off"></i>
         <a href="#"> LOG OUT</a></div>

  </div>
  </div>
    )
}
export default Sidebar;