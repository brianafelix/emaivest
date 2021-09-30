import "./Sidebar.css";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jpeg";
const Sidebar = (props) => {
  const [inactive, setInactive] = useState(true);

  return (
    <div className={inactive ? "sidebar-inactive" : ""} id="Sidebar">
      <div className="Sidebar__title">
        <div className="Sidebar__img">
          <img src={logo} />
          <h1>EMARPE Soluçoes</h1>
        </div>
        <i
          className="bi bi-x-square-fill"
          id="SidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="Sidebar__menu">
        <div className="Sidebar__link active_menu_link">
<<<<<<< HEAD
          <i class="bi bi-grid-1x2-fill"></i>
          <a href="#">home</a>
=======
        <i class="bi bi-border-all"></i>
          <a href="#">Dashboard</a>
>>>>>>> 627449b0c1559ac742c916c52222e5da4cdfd0aa
        </div>

        <div className="Sidebar__link">
<<<<<<< HEAD
          <i class="bi bi-clipboard"></i>
          <a href="#">Area administrativa</a>
        </div>

        <div className="Sidebar__link">
          <i className="bi bi-file-earmark-check"></i>
          <a href="#">lojas</a>
        </div>

        <div className="Sidebar__link hr">
          <hr></hr>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-info-circle"></i>
          <a href="#">categorias</a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-shop"></i>
          <a href="#">Administrador</a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-bag"></i>
          <a href="#">Usuarios</a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-collection"></i>
          <a href="#">Pagamentos E Custos </a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-people"></i>
          <a href="#">A Plataforma </a>
        </div>

        <div className="Sidebar__link hr">
          <hr></hr>
        </div>

        <div className="Sidebar__logout">
          <i class="bi bi-power"></i>
          <a href="#"> LOG OUT</a>
=======
        <i class="bi bi-file"></i>
          <a href="#"> Balancetes</a>
        </div>

        <div className="Sidebar__link">
        <i class="bi bi-file-earmark-check-fill"></i>
          <a href="#">Parametrizaçao</a>
        </div>

        <div className="Sidebar__link">
          <h6>Administracao</h6>
        </div>

        <div className="Sidebar__link">
        <i class="bi bi-exclamation-circle-fill"></i>
          <a href="#">Ajudas</a>
        </div>

        <div className="Sidebar__link">
        <i class="bi bi-shop"></i>
          <a href="#">Contabilidades</a>
        </div>

        <div className="Sidebar__link">
        <i class="bi bi-shop-window"></i>
          <a href="#">Empresas</a>
        </div>

        <div className="Sidebar__link">
        <i class="bi bi-file-earmark"></i>
          <a href="#">Planos </a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-list"></i>
          <a href="#">Váriavés </a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-people-fill"></i>
          <a href="#">Usuarios</a>
>>>>>>> 627449b0c1559ac742c916c52222e5da4cdfd0aa
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
