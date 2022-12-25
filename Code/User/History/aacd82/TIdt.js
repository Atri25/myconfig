import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
    <div className="jumbotron mt-5">
    <h1 className="display-4">Welcome to Blog Lyfe</h1>
    <p className="lead">Blogging is a form of sharing information with the world and i have build this website so that people like I can share what I feel and you can enjoy consuming my content</p>
    <hr className="my-4"/>
    <Link className="btn btn-primary btn-lg" to="/blog" role="button">VISIT OUR BLOG</Link>
    </div>
    </div>
);

export default home;