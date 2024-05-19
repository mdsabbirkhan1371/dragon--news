import { Link,useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const Login = () => {

    const {signIn} =useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin =(e)=>{
            e.preventDefault()
            const form = new FormData(e.currentTarget)
            console.log(form)
            const email = form.get('email')
            const password=form.get('password')
            console.log(email,password)

            // sign in with email and password 

          signIn(email,password)
          .then(res=>{
            console.log(res.user)
            e.target.reset()
             navigate(location?.state ? location.state : "/")
           
          })
          .catch(err=>{
            console.error(err)
          })

    }
    return (
        <div>
            <Navbar></Navbar>
            
            <div>
                <h2 className="text-center text-3xl my-10 font-bold">Please Login Here...</h2>
                    <form onSubmit={handleLogin} className="card-body md:w-1/2 mx-auto lg:h-1/2">
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                </form>

                <p className="text-center">Do not have an Account ? <Link className="text-primary font-bold" to="/register"> Register Here</Link></p>
            </div>
        </div>
    );
};

export default Login;