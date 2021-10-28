import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, price, description, img, time } = service;
    return (
        <div className="service pb-3 ">
            <img className="service-img" src={img} alt="" />
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            <h4>price: {price}</h4>
            <h6>Time: {time}</h6>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>

        </div>
    );
};

export default Service;