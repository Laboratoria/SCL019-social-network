// aqui exportaras las funciones que necesites
let container = document.getElementById("films.anime");
 const logueo = () =>{
  const[estaRegistrandose, setEstaRegistrandose] = useState(false);
  return `
  <container>
      <Stack gap={3}>
        <h1>{estaRegistrandose ? "Regístrate" : "Inicia Sesión"}</h1>
      <Form>
        <Form.group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter mail"></Form.Control>
          <Form.Text className="text-muted">
            We'll never Share your email with anyone else.
          </Form.Text>
        </Form.group>

        <Form.group className="mb-3"  controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password"></Form.Control>
        </Form.group>

        <Form.group className="mb-3"  controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" /> 
        </Form.group>


  <Button variant= "primary" type="submit"> </Button>


  <Button variant="primary" onClick= {() => setEstaRegistrandose(!estaRegistrandose)}>
    {estaRegistrandose ? "¿Ya tienes cuenta? Inicia Sesión" : "¿No tienes cuenta? Regístrate"}
  </Button>
      </Form>
  </Stack>
    </container>
    `
};
