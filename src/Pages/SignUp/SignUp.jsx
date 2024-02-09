import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Proveider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-min py-9 ">
                <div className="hero-content gap-[150px]  flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">SignUp</h1>
                            <form onSubmit={handleSignUp}>
                                  <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="SignUp" />
                                </div>
                            </form>
                            <p>Already have an account? <Link to="/Login" className='text-[#FF3811] font-bold'> Login Now</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;