import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className='bg-main w-full' style={{
                height: '100vh',

            }}>
                <form className="form mx-auto">
                    <p className="title">Register </p>
                    <p className="message">Signup now and get full access to our app. </p>

                    <label>
                        <input className="input" type="text" placeholder="" required="" />
                        <span>Full Name</span>
                    </label>
                    <label>
                        <input className="input" type="email" placeholder="" required="" />
                        <span>Email</span>
                    </label>

                    <label>
                        <input className="input" type="password" placeholder="" required="" />
                        <span>Password</span>
                    </label>
                    <label>
                        <input className="input" type="password" placeholder="" required="" />
                        <span>Confirm password</span>
                    </label>
                    <button className="submit">Submit</button>
                    <p className="signin">Already have an acount ? <Link to={`/login`}>Log In</Link></p>
                </form>
            </div>
        </>
    )
}

export default Register