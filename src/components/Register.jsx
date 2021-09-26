import React, { useState } from "react";

function submit(uname, email, password, phone, setName, setEmail, setPassword, setPhone, setInvalidEmail,setSuccessful )
{
  
  const userData = {name: uname, email: email, password: password, phone: phone}


  const database = JSON.parse(localStorage.getItem("Users"))
  
  if(database[email] == null)
  { 
  database[email] = userData
   setInvalidEmail(false);
   setSuccessful(true);
}

  else 
  {
  console.log("Already exists")
  setInvalidEmail(true);
   setSuccessful(false);
  }
 
  
  localStorage.setItem("Users", JSON.stringify(database))
  
     setName('');
     setEmail('');
     setPassword('');
     setPhone('');
  
}
  

function Register() {

  const [uname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const database = JSON.parse(localStorage.getItem("Users"));
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [successful, setSuccessful] = useState(false);



  return (

    
    <div className="Register">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
            
          </div>
          <div class="col-lg-5">
          
          <div>
            {invalidEmail? <p>Already Exists</p> :<></> }

            {successful? <p>Registration Successful</p> :<></> }
          
            </div>

            <h1 class="font-weight-light"><center><b>Register</b></center></h1>
            <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name"  value={uname} onInput={e => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onInput={e => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onInput={e => setPassword(e.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" value={phone} onInput={e => setPhone(e.target.value)} />
                </div>

                <button type="submit" onClick={()=>submit(uname, email, password, phone, setName, setEmail, setPassword, setPhone, setInvalidEmail,setSuccessful)} className="btn btn-dark btn-lg btn-block">Register</button>
          
               
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
