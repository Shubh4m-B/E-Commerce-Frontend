import React from 'react'
import Layout from '../Core/Layout'
import { API } from '../config'

export default function SignUp() {
    return (
        <Layout title="Sign Up Page" description="Node React E-Commerce App">
            Sign up page
            {API}
            {console.log("API:", API)}
        </Layout>
    )
}
