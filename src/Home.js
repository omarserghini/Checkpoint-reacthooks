import  {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoList from './Components/MoList';
import {Nav,Navbar,Container} from 'react-bootstrap';
import Add from './Components/Add';
function App() {
const [films,setFilms]= useState([ 
{

  titre: 'Ce que le jour doit a la nuit',
  bio :"Romantic",
  url: "https://fr.web.img5.acsta.net/medias/nmedia/18/91/71/02/20159308.jpg" ,
  rate:"5",
},

{

  titre:"Papillion",
  bio :"Drama",
  
  url: "https://m.media-amazon.com/images/M/MV5BNTdmYWEzNmEtNDIzYi00ZDM5LTkxYjgtN2FjNDE0YzA3NDJlXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg" ,
  rate:"4",
},

{
  
  titre:"The invisible guest ",
  bio :"Crime",
  url: "https://fr.web.img6.acsta.net/pictures/16/11/18/11/16/356441.jpg" ,
  rate:"4",
},





])
function addmovie(newMovie){

  setFilms([...films,newMovie])
}
  return (
<div> 


 
  <Add addmovie={addmovie}/>
      <MoList films={films}/>

</div>
  );

}

export default App;