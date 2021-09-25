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
                <CardRazaPerros nombreRaza="BorderCollie" imagen={bordercollie}/>
                <CardRazaPerros nombreRaza="Beagle" imagen={beagle}/>
            </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

function CardRazaPerros(nombreRaza,imagen){
    return(
        <li className="breedCard">
                    <div className="contenedorImagen">
                    <img src={imagen} alt={nombreRaza}/>
                    </div>
                    <span className="breedTitle">{nombreRaza}</span>
                </li>
    )
}

export default App;
