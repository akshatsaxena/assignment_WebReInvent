import { useContext, useState, useEffect} from "react";
import { trylogginIn } from "../services/auth";
import { AuthContext, useAuth } from '../authContext';
import { useNavigate } from "react-router-dom";
const SignIn =()=>{
    const [data,setData]=useState({
        password:'',
        email:''
    });
    const { login,isLoggedIn} = useAuth();
    const navigate=useNavigate();
  
    const onSignInCTA = async () => {
      
        console.log("Inside method",data)
        if(data.email && data.password) {
            const res = await trylogginIn(data)
            if(res?.token) {
                localStorage.setItem("token",res.token);
                login();
                console.log(isLoggedIn)
                //window.location.pathname = '/dashboard'
                navigate( '/dashboard');
            }
        }
    }
    


    return(
<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">User Dashboard</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis enim voluptates ipsam eligendi earum minima deleniti culpa optio nobis aliquid beatae, obcaecati fugit autem atque consequatur, aliquam illum est vero.
          </p>
          
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label  className="text-sm font-semibold text-gray-500">Email address</label>
              <input 
                type="email"
                id="email"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e)=>setData({...data,email:e.target.value})}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label  className="text-sm font-semibold text-gray-500">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e)=>{
                    setData({...data,password:e.target.value});
                }}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label  className="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="button"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              onClick={()=> onSignInCTA()}
              >
                Log in
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 my-4 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                onClick={()=>{navigate('/signup')}}
              >
                Not Registed SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}
export default SignIn;