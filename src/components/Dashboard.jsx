import React, { useState } from "react";

function Dashboard() {
  const [isLoggedIn, SetLoginState] = useState(false)

if(isLoggedIn) {

  return (
    
        <div class="row align-items-center my-5">
          <div class="col-lg-3"></div>
            <div class="col-lg-5">
               <center><h1>Registered Users</h1></center> 
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
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <button type="submit" onClick={()=>SetLoginState(true)} className="btn btn-dark btn-lg btn-block">Login</button>
            
          </div>
        </div>
      </div>
    </div>
   );
 }
}

export default Dashboard;
