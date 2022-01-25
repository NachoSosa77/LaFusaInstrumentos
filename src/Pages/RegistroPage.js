import React,{useState} from "react"
import { useHistory } from "react-router-dom";
import {Form,Container, Button} from 'react-bootstrap'
import FormGroup from "../Components/Forms/FormGroup"


function RegistroPage() {
    const [form,setForm] = useState({nombre:'',apellido:'',dni:'',email:'',contraseña:''})
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(form)
      fetch("http://localhost:3000/users/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setLoading(false)
      })

      setLoading(true)
      history.push("/ingresar")
    }
    
    return (
      <Container>
            <Form onSubmit={handleSubmit}>
              <FormGroup label="Nombre" type="text" placeholder="Ingrese su nombre" name="nombre" value={form.nombre} onChange={handleChange}/>
              <FormGroup label="Apellido" type="text" placeholder="Ingrese su apellido" name="apellido" value={form.apellido} onChange={handleChange}/>
              <FormGroup label="Dni" type="text" placeholder="Ingrese su Dni" name="dni" value={form.dni} onChange={handleChange}/>
              <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} onChange={handleChange}/>
              <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} onChange={handleChange}/>
              
              <Button type="submit">Registrarse</Button>
                      
            </Form>
        </Container>
    );
  }
  
  export default RegistroPage;
  