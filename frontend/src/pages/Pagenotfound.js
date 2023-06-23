import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
    return (
        <Layout title={'go back - page not found'}>
            <div className='pnf'>
                <h1 className='pnf-tittle'>404</h1>
                <h2 className='pnf-heading'>Oops ! Page Not found</h2>
                <Link to='/' className='pnf-btn'>GO Back</Link>
            </div>
        </Layout>
    )
}

export default Pagenotfound;
