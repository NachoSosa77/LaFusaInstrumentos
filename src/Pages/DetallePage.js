import React,{useState,useEffect} from "react"
import {Container} from 'react-bootstrap'
import Detalle from "../Components/Detalle"
function DetallePage(props) {
  const [producto,setProducto] = useState({})
 
  useEffect(
    ()=>{
      fetch("http://localhost:3000/productos/"+props.match.params.id)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setProducto(data)
       
      })
    },[]
  )
  return (
    <Container>
    
        <div className="App">
          <Detalle key={producto._id} producto={producto}/>
        </div>
    
    </Container>
    
  );
}

export default DetallePage;
