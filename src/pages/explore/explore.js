import React from "react";
import { Destinations } from "../../Asset/images";
import "./explore.scss";
import Header from "../../component/Header";

const Explore = () => {
    return (
        <div className="explore-container">
            <Header />

            <div className="cards-container">
                {Destinations.map((obj, idx) => (
                    <DestinationCard key={idx} destination={obj} />
                ))}
            </div>
        </div>
    );
};

const DestinationCard = ({ destination }) => {
    return (
        <div
            style={{
                backgroundImage: `url('/Destinations/${destination.imageName}.jpg')`,
            }}
            className="destination-card"
        >
            <div className="wrapper">
                <div className="destination-name">{destination.imageName}</div>
                <div className="destination-description">
                    {destination.Description}
                </div>
            </div>
        </div>
    );
};

export default Explore;
