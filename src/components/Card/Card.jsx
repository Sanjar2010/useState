import React from 'react';
import  { useState} from 'react';
import './Card.scss'
import btn from './../../assets/Group 91.svg'
import image from './../../assets/image 5.svg'



const products =[
{
    desc:'nike',
    price:999,
}
]
const Card = (props) => {
    const {desc,price,img} = props 
    const [add, setAdd] = useState(0) 
    function handleClick(){ 
        setAdd(c=> c + 1) 
    } 
    function handleClickTwo(){ 
        setAdd(d => d- 1) 
}

    return (
        <div className='container'>
        <div className='card-box'>
                <img src={image} alt="" />
                <p className='desc'>{desc}</p>
                <p>{price}</p>


                <button onClick={handleClick}><img src={btn} alt="" /></button>
                
                <p>{add}</p>
            </div>
        </div>
    );
}
export default Card;



