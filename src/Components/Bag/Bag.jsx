import React from 'react'
import s from './Bag.module.css'
import { useSelector } from 'react-redux'

const Bag = () => {
   const data = useSelector(state => state.bag.data);
   const bagPrice = useSelector(state => state.bag.bagPrice);
   return (
	<div className={s.main}>
	    <div className = {s.bag}>
	    	<div className = {s.h1}>Bag</div>	
	    	{data.map((el, idx) => {
			return  <div className = {s.sneaker} key = {idx}>
			           <img src = {el.src}/>
				   <span>
					<div>{el.title}</div>
				    	<div>Size: {el.size}</div>
				    	<div>Quantity: 1</div>
			    	    </span>
			    	<div>${el.price}</div>aaaa	
		    	</div>
	    	})}
	    </div>    
	{/* This is the price part of the bag */}
	     <div className = {s.summary}>
		<h2 className={s.h2}>Summary</h2>
		<span className = {s.box}>
		   <div className = {s.box1}>
			<div>Subtotal</div>
			<div>Estimated Shipping</div>
			<div>Estimated Tax</div>
		   </div>
		   <div className = {s.box2}>
			<div>${bagPrice}</div>
			<div>${bagPrice == 0 ? 0 : 7}</div>
			<div>-</div>
		   </div>
		</span>

		<div style = {{width: '100%', height: '0.1%', backgroundColor: '#8E8E93'}}/>

		<span className = {s.box}>
			<div className = {s.box1}><div>Total</div></div>
			<div className = {s.box2}><div>${bagPrice == 0 ? 0 : bagPrice + 7}</div></div>
		</span>

		<div style = {{width: '100%', height: '0.1%', backgroundColor: '#8E8E93'}}/>

            	<div className= {s.button}>
               		Checkout
            	</div>
            	<div className = {s.button_2}>
               		PayPal 
            	</div>		
	     </div>
	</div>
   )
}

export default Bag;
