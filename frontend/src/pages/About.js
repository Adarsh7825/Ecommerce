import React from 'react'
import Layout from '../components/Layout'

const About = () => {
    return (
        <Layout title={"About us - Saleshive"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        Discover a seamless shopping experience with the Saleshive ecommerce app. Browse through a vast selection of products ranging from electronics, fashion, home decor, beauty, and more. With Saleshive, you can enjoy a user-friendly interface, secure transactions, and fast delivery right to your doorstep. Whether you're looking for the latest tech gadgets or trendy fashion items, Saleshive has you covered. Start exploring and find the perfect items to enhance your lifestyle today!
                    </p>

                </div>
            </div>
        </Layout>
    )
}

export default About
