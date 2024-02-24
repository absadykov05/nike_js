import React, {useState} from 'react'
import s from './Sneaker.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {addSneaker} from '../../Redux/bagSlice'
import { useLocation, NavLink } from 'react-router-dom'

const Sneaker = () => {
   const location = useLocation();
   const {title, src, price, gender} = location.state;
   const [activeId, setActiveId] = useState(-1);
   const sizes = [37, 38, 39, 40, 41, 42];
   const dispatch = useDispatch();

   return (
      <div className = {s.main}>
         <img className = {s.img} src = {src}/>
         <span>
            <>
               <div className = {s.title}>{title}</div>
               <div className = {s.gender}>{gender}</div>
               <div className = {s.price}>${price}</div>
            </>
            <div className = {s.size}>
               {sizes.map((el, idx) => {
                  return <div className = {activeId == idx? s.active : s.inactive}
                     onClick = {() => setActiveId(idx)} key = {idx}>{el}</div>
               })}
            </div>
            <NavLink className = {s.button} to = {'/'} 
               onClick={() => dispatch(addSneaker({title: title, src: src, price: price, size: sizes[activeId]}))}>
               Add to bag
            </NavLink>
            <div className = {s.button_2}>
               Favorite 
            </div>
         </span>      
      </div>
    )
}

export default Sneaker;