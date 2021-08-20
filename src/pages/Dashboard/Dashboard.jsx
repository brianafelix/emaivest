import React from "react";
import MultipleYaxis from "../../components/Charts/MultipleYaxis";
import PieChart from "../../components/Charts/PieChart";
import RadialChart from "../../components/Charts/RadialChart";

export default function Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <h5 className="title">Lucratividade</h5>
                  <RadialChart
                    percentage="30"
                    barsize="70"
                    radialLabel="Mês actual"
                  />
                  <h6 className="text-center">
                    {" "}
                    <i className="bi bi-arrow-up"></i> 252.100,00 kz
                  </h6>
                </div>

                <div className="col-md-3" style={{ marginTop: "32px" }}>
                  <RadialChart
                    percentage="80"
                    barsize="70"
                    radialLabel="Acumulado Ano"
                  />
                  <h6 className="text-center">
                    {" "}
                    <i className="bi bi-arrow-up"></i> 4.252.100,00 kz
                  </h6>
                </div>
                <div className="col-md-6">
                  <h5 className="title">Fluxo de Resultados</h5>
                  <MultipleYaxis />
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5>Distribuição dos Resultados</h5>
                  <PieChart />
                </div>

                <div className="col-md-6">
                  <h5>Comparação com o mês anterior</h5>

                  <div className="progress mt-5">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-success"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-warning"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-danger"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="title">Variação de Caixa</h5>
              <h1>
                {" "}
                <i className="bi bi-arrow-down"></i> -6.302.33 kz
              </h1>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="title">Capac. de Quitar Obrigações</h5>
              <div className="row">
                <div className="col-md-2">
                  <div>
                    {" "}
                    <i className="bi bi-triangle-half"></i>{" "}
                  </div>
                  <div>
                    {" "}
                    <i className="bi bi-triangle-fill"></i>{" "}
                  </div>
                </div>
                <div className="col-md-10">
                  <h1>200.000,00 kz</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="title">Ciclo Financeiro e N. Capital d</h5>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-6">
                  <h6>Ciclo Financeiro</h6>
                  <h5>100 Dias</h5>
                </div>
                <div className="col-md-6">
                  <h6>Nº Captial de Giro</h6>
                  <h5>4.203.569,00 kz</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="title">Ebitada</h5>
              <h1>
                {" "}
                <i className="bi bi-arrow-up"></i> 806.302.33 kz
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
