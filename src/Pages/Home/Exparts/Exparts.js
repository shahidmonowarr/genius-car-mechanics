import React from 'react';
import Expart from '../Expart/Expart';




const ourExperts = [
    {
        img: 'https://i.ibb.co/P4JJBHR/mechanic-1.jpg',
        name: 'Andrew Smith',
        experties: '-Engine Expart'
    },
    {
        img: 'https://i.ibb.co/FnqsQJK/mechanic-2.jpg',
        name: 'John Anderson',
        experties: '-Polish Expart'
    },
    {
        img: 'https://i.ibb.co/fpPnby9/mechanic-3.jpg',
        name: 'MonoSmith',
        experties: '-Coloring Expart'
    }
]

const Exparts = () => {
    return (
        <div className="container mb-5" id="exparts">
            <h2 className="text-primary mt-5 fs-1">Our experts</h2>
            <div className="row">
                {
                    ourExperts.map(expart => <Expart key={expart.name} expart={expart} ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;