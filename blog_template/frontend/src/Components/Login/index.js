import Base from "../Base"
import { useState } from "react"

import './index.css'
const Login=()=>{
    const [data,setData] = useState({
        email:'',
        password:''
    })
    

    const onLoginSubmit=(event)=>{
        event.preventDefault()
        console.log(data)
        setData({
        email:'',
        password:''
        })
       
    }

    const handleInputChange=(event)=>{
        const {name,value} = event.target
        setData({...data,[name]:value})


    }
    
    return(
        <Base>
         <div className="login-container">
            <h1>Login</h1>
            <form className="login-form-container" onSubmit={onLoginSubmit}>
                <label htmlFor="email" className="login-label">Email</label>
                <input className="login-input" name='email' type="email" value={data.email} id="email" placeholder="Email" onChange={handleInputChange}/>
                <label htmlFor="password"  className="login-label">Password</label>
                <input className="login-input" type="password" id="password" name="password" value={data.password} placeholder="Password" onChange={handleInputChange} />
                <input type="submit" className="login-submit"/>
            </form>
         </div>
        </Base>
    )

}

export default Login