import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Core/Layout'
import { signup } from '../Auth'


export default function SignUp() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, error, success } = values

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                }
            })
    }

    return (
        <Layout title="Sign Up" description="Sign Up to the React E-Commerce App" className="container col-md-4 offset-md-4">
            <form>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="text" className="form-control" onChange={handleChange('name')} value={name} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input type="text" className="form-control" onChange={handleChange('email')} value={email} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" className="form-control" onChange={handleChange('password')} value={password} />
                </div>
                <button className="btn btn-primary" onClick={clickSubmit} style={{ width: "100%" }}>
                    Submit
                </button>
                <div className="alert alert-danger" style={{ display: error ? "" : "none", marginTop: "30px" }}>
                    {error}
                </div>
                <div className="alert alert-info" style={{ display: success ? "" : "none", marginTop: "30px" }}>
                    New account created successfully. Please <Link to="/signin">Sign in</Link> now
                </div>
            </form>
        </Layout>
    )
}
