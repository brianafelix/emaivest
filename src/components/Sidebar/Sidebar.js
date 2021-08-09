import "./Sidebar.css";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jgp.png";
const Sidebar = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    props.onCollapse(inactive);
  }, [inactive]);

  return (
    <div className={inactive ? "sidebar-inactive" : ""} id="Sidebar">
      <div className="Sidebar__title">
        <div className="Sidebar__img">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              setInactive(!inactive);
            }}
          />
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
        <i class="bi bi-border-all"></i>
          <a href="#">Dashboard</a>
        </div>

        <div className="Sidebar__link">
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
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
