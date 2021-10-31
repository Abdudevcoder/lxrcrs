import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out These Luxury Cars!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="/images/img-9.jpg" text="Choose the luxury you deserve" label="Luxury" path="/services"/>
                        <CardItem 
                        src="/images/img-2.jpg" text="Explore the hidden power of latest sport-cars" label="Speed" path="/services"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="/images/img-3.jpg" text="Enjoy driving even when you are with your family" label="Efficency" path="/services"/>
                        <CardItem 
                        src="/images/img-4.jpg" text="Feel the power of real American muscle" label="Muscle" path="/services"/>
                        <CardItem 
                        src="/images/img-8.jpg" text="Impress your friends with beauty of your car" label="Exotic" path="/services"/>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Cards;
