import React, { useState } from 'react'
import Layout from '../Core/Layout'
// import { API } from '../config'

export default function SignUp() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    return (
        <Layout title="Sign Up" description="Sign Up to the React E-Commerce App" className="container col-md-4 offset-md-4">
            <form>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="text" className="form-control" onChange={handleChange('name')} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input type="text" className="form-control" onChange={handleChange('email')} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" className="form-control" onChange={handleChange('password')} />
                </div>
                <button className="btn btn-primary">
                    Submit
                </button>
            </form>
        </Layout>
    )
}
