import './App.css';
import Card from './components/Card/Card';
import {Route, Routes ,Router} from "react-router-dom";

import Tovar from './pages/Tovar/Tovar';
import Header from './components/Header/Header';


// const prods = [
//   {
// price:99,
// desc:'doll'

// },

// ]


function App() {
  return (
    




     <>
     <Header/>
 
     <Routes>
       <Route exact path='/tovar' element={<Tovar/>}/>
       <Route exact path='/tovar' element={<Tovar/>}/>
       <Route exact path='/' element={<Card
      //  {
      //  prods.map( prod=> (
      //   price={prods.price}
      //  ))
      // }
       />}/>
      </Routes>
     </>
    
  );
}

export default App;
