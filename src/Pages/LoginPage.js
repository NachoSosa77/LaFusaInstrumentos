import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { Form, Container, Button } from 'react-bootstrap'
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"

function LoginPage(props) {
  const { setLogin } = props;
  const [form, setForm] = useState({ email: '', password: '' })
  const [alert, setAlert] = useState({ variant: "", text: "" })
  const history = useHistory();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (!data.error) {
          localStorage.setItem("token",data.token)
          setLogin(true);
          history.push("/")
        }else{
          setAlert({variant:"danger",text:data.message})
        }
      }
      )

  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} onChange={handleChange}/>
        <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} onChange={handleChange}/>
        <Button type="submit">Ingresar</Button>
      </Form>
      <AlertCustom variant={alert.variant} text={alert.text} />
    </Container>
  );
}

export default LoginPage;