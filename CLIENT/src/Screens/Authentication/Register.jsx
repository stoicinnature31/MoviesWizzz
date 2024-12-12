import React from 'react'
import Layout from '../../Layouts/Layout'
import './Register.css'

const Register = () => {
    return (
        <Layout>
            <form className="form m-auto">
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                    <label>
                        <input className="input" type="text" placeholder="" required="" />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input className="input" type="text" placeholder="" required="" />
                        <span>Lastname</span>
                    </label>
                </div>

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
                <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
            </form>
        </Layout>
    )
}

export default Register