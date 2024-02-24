import React from 'react'
import s from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSneakerType } from '../../Redux/sneakersSlice'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const dispatch = useDispatch();
	const types = useSelector(state => state.sneakers.types);
	const type = useSelector(state => state.sneakers.sneakerType);
  return (
    <div className = {s.navbar}>
	{types.map((el, idx) => {
		return <NavLink to = {'/'} className = {idx === type ? s.active_link : s.link}
			onClick={() => dispatch(setSneakerType(idx))} key = {idx}>{el}</NavLink>
	})}
    </div>
  )
}

export default Navbar;
