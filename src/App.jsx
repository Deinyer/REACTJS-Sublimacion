/* import logo from './logo.svg';*/
import ItemListContainer from '../src/Components/ItemListContainer'
import NavBar from './Components/NavBar';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Route,Routes } from 'react-router-dom';


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