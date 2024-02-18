import { useState } from "react"

const RegistrationComponent =()=>{
    
    const[name,setname]=useState('')
    const nameChange=(event)=>{
        setname(event.target.value)
        console.log(name)
    }
    const [email, setemail ]= useState('')
    const emailChange = (event) => {
      setemail(event.target.value);
      console.log(email);
    };
    const [pass, setpass] = useState("");
    const passChange=(event)=>{
        setpass(event.target.value)
        console.log(pass);
    }
    const submit=()=>{
        const button={name,email,pass}
        console.log(button)
    }
    return (
      <div>
        <button>Name</button>
        <input value={name} onChange={nameChange}></input>
        <br></br>
        <button>Email</button>
        <input onChange={emailChange}></input>
        <br></br>
        <button>Password</button>
        <input onChange={passChange}></input>
        <br></br>
        <button onClick={submit}>Submit</button>
      </div>
    );
}

export {RegistrationComponent}