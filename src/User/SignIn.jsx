import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../Core/Layout'
import { signin } from '../Auth'


export default function SignIn() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    })

    const { email, password, error, loading, redirectToReferrer } = values

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const showLoading = () => (
        loading && (<div className="alert alert-info">
            <h2>Loading...</h2>
        </div>)
    )

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to="/" />
        }
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                }
                else {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    })
                }
            })
    }

    return (
        <Layout title="Sign Up" description="Sign Up to the React E-Commerce App" className="container col-md-4 offset-md-4">
            <form>
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
                {showLoading()}
                {redirectUser()}
            </form>
        </Layout>
    )
}
