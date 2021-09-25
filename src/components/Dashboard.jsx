import React, { useState } from "react";


function Dashboard() {
  const [isLoggedIn, SetLoginState] = useState(false) ;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const database = JSON.parse(localStorage.getItem("Users"));

if(isLoggedIn) {

  return (
    
        <div class="row align-items-center my-5">
          <div class="col-lg-3"></div>
            <div class="col-lg-5">
               <center><h1>Registered Users</h1> 
               <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
  </tr>
  {Object.entries(database).map(([key, val], i) => (
                <>
                <tr><td>{val.name}</td><td>{val.email}</td><td>{val.phone}</td></tr>
                </>
              ))}
</table></center>
            </div>
         </div>

  )
  
}
else {
  return (
    <div className="Dashboard">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
            
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><center><b>Admin Login</b></center></h1>
            <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" value={username} onInput={e => setUsername(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onInput={e => setPassword(e.target.value)}/>
                </div>

                <button type="submit" onClick={()=>check(setUsername,setPassword,SetLoginState)} className="btn btn-dark btn-lg btn-block">Login</button>
            
          </div>
        </div>
      </div>
    </div>
   );
 }
 function check(setUsername,setPassword,SetLoginState)
  {
    if(username == "admin" && password == "admin")
    {
      SetLoginState(true)  
    }
  }

}

export default Dashboard;
