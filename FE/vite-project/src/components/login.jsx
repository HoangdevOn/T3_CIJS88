import { useState } from "react";
import { Button, Form } from "react-bootstrap";


const Login = () => {
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [passerror,setPassError]=useState("")
    const [usererror,setUserError]=useState("")
    export username
  
    const handleSubmit=()=>{
         let validate=true
        if (username==""){
          setUserError("user cant be blank")
          validate=false
        }
        else{
          setUserError("")
        }
  
        if (password==""){
          setPassError("password cant be blank")
          validate=false
        }
        else{
          setPassError("")
        }
  
        if (password==""){
          setPassError("password can be blank")
          validate=false
        }
  
        else{
          setPassError("")
        }

  
        if (validate==true){
          console.log("True")
        }
        else
        console.log("false")
    }
  
    return (
      <div className="accback">
            <br/><br/><br/>
          <div className="accform">
          <Form>
              <div className="tile">
              <h1>Sign up </h1>
              </div>
  
              <div>
              <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
              </Form.Group>
              <p>{usererror}</p> 
              </div>
  
              <div>
              <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control  type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
              </Form.Group>
              <p>{passerror}</p>
              </div>

  
              <a href="#">dont have an account click here</a>
  
              <div>
              <Button onClick={()=>handleSubmit} >Submit</Button>
              </div>
  
          </Form>
          </div>
      </div>
      );
}


export default Login