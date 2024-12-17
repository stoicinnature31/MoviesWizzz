import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='bg-main w-full' style={{
                height: '100vh',
            }}>
                <form className="form m-auto">
                    <p className="title">Login </p>
                    <p className="message">Signin now and get full access to our app. </p>
                    <label>
                        <input className="input" type="email" placeholder="" required="" />
                        <span>Email</span>
                    </label>

                    <label>
                        <input className="input" type="password" placeholder="" required="" />
                        <span>Password</span>
                    </label>

                    <button className="submit">Submit</button>
                    <p className="signin">Don't have an acount ? <Link to={`/register`}>Register</Link></p>
                </form>
            </div>
        </>
    )
}

export default Login