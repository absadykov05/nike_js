import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Home = () => {
	const data = useSelector(state => state.sneakers.data);
	const type = useSelector(state => state.sneakers.sneakerType);	
	const genderList = ["Men's shoes", "Women's shoes", "Unisex"];
   return (
	   <div className='shop'>
      	   {data[type].map(el => {
        	   return <NavLink className='sneaker' key = {el.src} to = '/sneaker' 
		   		state = {{title: el.title, src: el.src, price: el.price, gender: el.gender}}>
                	   <img className='sneaker_img' src = {el.src}/>
                	   <span>
                  	   	<div className='sneaker_name'>{el.title}</div>
                  	   	<div className='sneaker_gender'>{genderList[el.gender]}</div>
                  	   	<div className='sneaker_price'>${el.price}</div>
                	   </span>
               		   </NavLink>
      	   })}  
      	   </div>
   )
}

export default Home;