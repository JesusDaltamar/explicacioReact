import logo from './logo.svg';
import './styles/App.css';
import bordercollie from './media/borderCollie.jpg';
import beagle from './media/beagle.jpg';
import logoperrito from './media/logoperrito.png';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logoperrito} alt="imagen" className="logo"/>
            </li>
            <li>
                <button className="Button mainButton">Nuevo post</button>
            </li>
            <li>
                <button className="Button secundaryButton">Login</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza" type="text"/>
                    <i className="fas fa-search-plus"></i>
                </div>
            </li>
            <li>
                <button className="Button mainButton">Registro</button>
            </li>
        </ul>
      </header>
      <main>
        <section>
            <h1>Razas de perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                    <img src={bordercollie} alt="FotoBorderCollie"/>
                    </div>
                    <span className="breedTitle">
                        Border collie
                    </span>
                    
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={beagle} alt="FotoBeagle"/>
                    </div>
                    <span className="breedTitle">
                        beagle
                    </span>
                </li>
            </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
