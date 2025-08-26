import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './Context'

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const Navigate = useNavigate()
    
    const RegisterHandel= e=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const result = {email,password}
        console.log(result);
        
        
        createUser(email,password)
        .then(result=>{
            console.log('User Created',result.user);
            e.target.reset()
            Navigate('/Login')
        })
        .catch(error=>{
            console.error('error', error.message)
        })
    }
  return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col  lg:flex-row-reverse">
                        <div className="text-center w-[-50%] lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6 w-[250px]">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card w-[-50%] bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                              <form onSubmit={RegisterHandel}>
                                  <fieldset className="fieldset">
                                        <label className="label">Email</label>
                                        <input type="email" name='email' className="input" placeholder="Email" />
                                        <label className="label">Password</label>
                                        <input type="password" name='password' className="input" placeholder="Password" />
                                        <div><a className="link link-hover">Forgot password?</a></div>
                                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                                  </fieldset>
                              </form>
                                <p>Already have an account '<Link to='/Login'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Register