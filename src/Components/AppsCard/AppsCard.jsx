import React from 'react';

const AppsCard = ({app}) => {
    const {image,title,downloads,ratingAvg,id} = app;
    return (
        <div>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>{downloads}</p>
            <p>{ratingAvg}</p>
        </div>
    );
};

export default AppsCard;