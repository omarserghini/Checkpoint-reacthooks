import React,{useState} from 'react'; 
import {Button,Modal,Badge} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

function Add({addmovie}) {
    
    const [show, setShow] = useState(false);


    const [newMovie, setnewMovie] = useState([])
    const handleChange=(e)=>{

        setnewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  




  
    return (
        <div > 
      <>

      <div class="container">
  <span id="rateMe1"></span>
</div>
        <Button variant="primary" onClick={handleShow}>
Add film        </Button>



  
        <Modal show={show} onHide={handleClose}>
         
          <Modal.Body>
          <form>

<label style={{fontFamily:'Segoe UI'}}>
    titre : <br/>
    <input type="text" name="titre" onChange={handleChange}/> <br/><br/>
    bio : <br/>
    <input type="text" name="bio" onChange={handleChange} /> <br/><br/>
   
    URL : <br/>
    <input type="text" name="url " onChange={handleChange}  /> <br/><br/>
    Rate : <br/>
    <input type="text" name="rate "  onChange={handleChange}/> <br/><br/>
  </label>

</form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>addmovie(newMovie) } >
              Save Changes
            </Button>
            <Button variant="primary" onClick={handleClose} >
              close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      </div>
    );
  }
  export default Add;