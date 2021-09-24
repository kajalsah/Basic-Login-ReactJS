import React from "react";
import  Register  from "./Register";

function Home() {



  

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">LogIn</h1>

            
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <div>
                
                    <b>Does not have an account?</b> <a href="#"  >Register</a> <b>here!</b>
                
                 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
