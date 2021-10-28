import React from 'react';

const Expart = ({ expart }) => {
    const { name, img, experties } = expart;
    return (
        <div className="col-md-4 col-sm-6 col-12 mt-3" >
            <div style={{ margin: '5px' }}>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>{experties}</h5>
            </div>

        </div>
    );
};

export default Expart; <h2>this is an expart</h2>