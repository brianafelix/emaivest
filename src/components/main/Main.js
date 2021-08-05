import hello from '../../assets/hello.svg.jpg';
import Chart from '../Charts/Chart';
import './Main.css';
const Main=()=>{
    return(
        <main><div className="Main__container">
          <div className=" Main__title">
             <img src={hello} alt="hello"/> 
             <div className="Main__greeting">
                 <h1>Ola EMARP</h1>
                <p>Bem vindo ao seu painel</p>
             </div>
              </div> 

              <div className="Main__cards">
               <div className="card">
               <i class="bi bi-file-earmark-text-fill "></i>
               <div className="card_inner">
                <p className="text-primary-p"> Numeros de pedidos</p>
                <span className="font-bold text-title">432</span>
               </div>
               </div>
               <div className="card">
                <i class="bi bi-cash-coin"></i>
                <div className="card_inner">
                <p className="text-primary-p text-green"> Pagamentos</p>
                <span className="font-bold text-title">R$2.467</span>
               </div>
               </div>   

               <div className="card">
                <i class="bi bi-cash-coin text-yellow"></i>
                <div className="card_inner">
                <p className="text-primary-p">Numero de produto</p>
                <span className="font-bold text-title">1234</span>
               </div>
               </div>   

               <div className="card">
                <i class="bi bi-cash-coin text-yellow"></i>
                <div className="card_inner">
                <p className="text-primary-p"> Categorias</p>
                <span className="font-bold text-title">R$2.467</span>
               </div>
               </div>   
               </div> 

               <div className="Charts">
                <div className="Charts__left">
                <div className="Charts__left__title">
                <div><h1>Daily reposts</h1>
                 <p>Patriota Luanda,ANG</p>
                </div>
                <i class="bi bi-cash-coin text-yellow"></i>
                </div>
                   </div>


                   <div className="Charts__rigth">
                <div className="Charts__rigth__title">
                <div><h1>Daily reposts</h1>
                 <p>Patriota Luanda,ANG</p>
                </div>
                <i class="bi bi-area-chart"></i>
                </div>

               <div className="Charts__rigth__cards">
               <div className="card1">
                <h1>Lucro</h1>
                <p>$234</p>
                 </div>

               <div className="card2">
                <h1>Pagamentos</h1>
                <p>$53,66</p>
               </div>

               <div className="card3">
                <h1>Custos de hospedagem</h1>
                <p>$956,00</p>
               </div>


               <div className="card4">
                <h1>Banco de Dados</h1>
                <p>$190,23</p>
             </div>
              </div>
              </div>
              </div>
              </div>
              </main>
    )
} 
export default Main;