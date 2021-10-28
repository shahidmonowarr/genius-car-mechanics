import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/404/5203299.jpg'
const Notfound = () => {
    return (
        <div>
            <div>
                <img style={{ width: '75%' }} src={image1} alt="" />
            </div>
            <Link to="/">
                <button className="btn-primary mb-5 p-2">Go Back</button>
            </Link>
        </div>
    );
};

export default Notfound;