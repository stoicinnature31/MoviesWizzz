import React from 'react'
import Layout from '../../Layouts/Layout'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <Layout>
            <form className="form m-auto">
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                
                <label>
                        <input className="input" type="text" placeholder="" required="" />
                        <span>Firstname</span>
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
        </Layout>
    )
}

export default Register