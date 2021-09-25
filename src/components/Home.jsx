import React, { useState } from "react";


function Home() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [isLoggedIn, SetLoginState] = useState(false);
  const [invalid, SetInvalid] = useState(false);

  
  if(localStorage.getItem("Users") == null) 
  { 
    const user = {};
    localStorage.setItem("Users", JSON.stringify(user))
  }

if(isLoggedIn) {

  return (
    
        <div class="row align-items-center my-5">
          <div class="col-lg-3"></div>
            <div class="col-lg-5">
               <center><h1>WELCOME</h1></center> 
            </div>
          <button type="logOut" onClick={()=>SetLoginState(false)} >LogOut </button>
         </div>

  )
  
}

  else{ 
   
    return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
            
          </div>
          <div class="col-lg-5">

            <div>
            {invalid? <p><b>Invalid Credentials</b> </p> :<></>}
            </div>
            
            <h1 class="font-weight-light"><center><b>LogIn</b></center></h1>

                <div className="form-group">
                   
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onInput={e => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onInput={e => setPassword(e.target.value)}/>
                </div>

                <button type="submit" onClick={()=>checklog(email, password,setEmail, setPassword, SetLoginState, SetInvalid)} className="btn btn-dark btn-lg btn-block">Login</button>
                <div>
                
                    <b>Does not have an account?</b> <a href="./Register"  >Register</a> <b>here!</b>
                 
                 </div>
          </div>
        </div>
      </div>
    </div>
  );

  }
  function checklog(email, password, setEmail, setPassword, SetLoginState, SetInvalid)
  {
    const database = JSON.parse(localStorage.getItem("Users"))

if(database[email] != null) {
  

       if (database[email].email == email && database[email].password == password) {
               SetLoginState(true)
               SetInvalid(false);
       }
       else {
        SetInvalid(true);
         console.log("invalid credentials_1");  
        }
     }
     else {
      SetInvalid(true);
      console.log("Invalid credentials_2") }


      localStorage.setItem("Users", JSON.stringify(database))
    
     setEmail('');
     setPassword('');
     
     

  } 

}
export default Home;
