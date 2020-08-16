import React,{useState} from 'react';
import Title from './titlecomponent';
import Swimming from '../images/amensvg/swimming-pool.svg';
import Club from '../images/amensvg/house.svg';
import Child from '../images/amensvg/player.svg';
import Landscape from '../images/amensvg/sprout.svg';
import Secur from '../images/amensvg/royal-guard.svg';
import Bank from '../images/amensvg/atm.svg';
import Basket from '../images/amensvg/basketball.svg';
import Caft from '../images/amensvg/coffee.svg';
import Conven from '../images/amensvg/pet-shop.svg';
import Jogging from '../images/amensvg/race-track.svg';
import Lands from '../images/amensvg/path.svg';
import Meditation from '../images/amensvg/meditation.svg';
import Convention from '../images/amensvg/hall.svg';
import Piped from '../images/amensvg/valve.svg';
import Power from '../images/amensvg/battery.svg';
import Tennis from '../images/amensvg/tennis-court.svg';
import Wifi from '../images/amensvg/wifi.svg';


const Amenities = () => {
    const [state, setstate] = useState([{
        name:"Swimming Pool",
        img:Swimming,
    },
    {
        name:"Club House",
        img:Club,
    },
    {
        name:"Kid's Playing Area",
        img:Child,
    },
    {
        name:"Landscaped Garden",
        img:Landscape,
    },
    {
        name:"24/7 Security",
        img:Secur,
    },
    {
        name:"Bank/ ATM",
        img:Bank,
    },
    {
        name:"Basketball Court",
        img:Basket,
    },
    {
        name:"Cafeteria",
        img:Caft,
    },
    {
        name:"Convenience Store",
        img:Conven,
    },
    {
        name:"Jogging Track",
        img:Jogging,
    },
    {
        name:"Landscape",
        img:Lands,
    },
    {
        name:"Meditaion",
        img:Meditation,
    },
    {
        name:"Convention Hall",
        img:Convention,
    },
    {
        name:"Piped Gas",
        img:Piped,
    },
    {
        name:"Power Backup",
        img:Power,
    },
    {
        name:"Tennis Court",
        img:Tennis,
    },
    {
        name:"WiFi",
        img:Wifi,
    },
    {
        name:"Garden",
        img:Lands,
    }
    ]);

    const displayingAmenities = () => {
        return state.map((item,i)=>{
            return(
                <div key={i} >
                   <img src={item.img} alt={item.name} width="50px"/>
                   <h1>{item.name}</h1>
                </div>
            )
        })
    }
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <Title title=" Waterford Amenities"/>
            </div>
            <div className="Amenities_main">
            {displayingAmenities()}
            </div>
        </div>
    );
};

export default Amenities;