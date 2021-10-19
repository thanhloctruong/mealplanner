import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(password!== confirmPassword){
          alert(" Password are not match");
        } else {
        //   dispatch(register(name, email, password));
        console.log('2');
        }
      };
    return (
        <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h1> Register</h1>
        </div>
        {/* {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>} */}
        <div>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            placeholder=" enter ur name"
            required
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            id="email"
            placeholder=" enter ur email"
            required
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="inter ur password"
            required
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword"> Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            placeholder="confirmpassword"
            required
            onChange={e => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="btn" type="submit">
            {" "}
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            already have an account? 
            <Link to={`props.history.push(redirect)}`}>Sign In </Link>
            {/* <Link to='/'>Sign In </Link> */}
          </div>
        </div>
      </form>
    </div>
    );
}

export default Register;