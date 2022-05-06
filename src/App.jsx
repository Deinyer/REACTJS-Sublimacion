/* import logo from './logo.svg';*/
import ItemListContainer from '../src/Components/ItemListContainer'
import NavBar from './Components/NavBar';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Route,Routes } from 'react-router-dom';




// import ItemDetail from './Components/ItemDetail';
// import detail from './Components/details';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

function App () {
  return(
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={< ItemListContainer/>} />
      <Route path='/Productos/:ProductosId' element={< ItemListContainer/>} />
      <Route path='/item/:Id' element={<ItemDetailContainer/>} />
    </Routes>
     
   
    {/**/}

  
    </>
  );
}
export default App;