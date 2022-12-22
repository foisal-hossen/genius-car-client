import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import img1 from '../assets/images/login/login.svg'
import { AuthContext } from '../Context/Auth/AuthProvider';

const Signup = () => {

  const { createuser } = useContext(AuthContext);
  
  function handleSignup(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    

    createuser(email, password)
      .then(result => {
        if(result){
          alert('successfull');
          event.target.reset();
        }
        console.log(result);
      })
      .catch(err => console.error(err));
  
  
}

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 gap-28 flex-col lg:flex-row">
      
      <div className="text-center lg:text-left">
          <img src={img1} className=" w-3/4"  alt="" />      
       </div>
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
        <h1 className="text-5xl text-center font-bold">Signup</h1>
      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
          <div className="form-control mt-6">
              <input type="submit" className="btn btn-error hover:text-white" value="Signup" />
        </div>
          </form>
          <p className='text-center font-semibold'>Already have an account? <Link to='/login' className='text-blue-600 font-semibold link-hover'>Login</Link> </p>
     </div>        
    </div>
</div>
  );
};

export default Signup;