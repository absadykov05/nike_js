import React, {useState} from 'react'
import s from './header.module.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const number = useSelector(state => state.bag.data.length);
  const [hidden, setHidden] = useState(true);
  return (
      <div className = {s.header}>
          <NavLink to = {'/'}>
            <img src = 'https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png'/>
          </NavLink>
          <span className = {s.header_1} onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)}>
            <div>New & Featured</div>
            <div>Men</div>
            <div>Women</div>
            <div>Kids</div>
            <div>Accessories</div>
            <NavLink className = {s.navLink} to = '/bag'>Bag ({number})</NavLink>
            {hidden ? null :
              <div className={s.dropDown} onMouseEnter={() => setHidden(false)}>
                <div className={s.dropDown_list}>
                  <h3>New & Featured</h3>
                  <div>Best Sellers</div>
                  <div>Member Products</div>
                  <div>New&Upcoming Drops</div>
                </div>
                <div className={s.dropDown_list}>
                  <h3>Men</h3>
                  <div>Lifestyle</div>
                  <div>Jordan</div>
                  <div>AirMax</div>
                </div>
                <div className={s.dropDown_list}>
                  <h3>Women</h3>
                  <div>Lifestyle</div>
                  <div>Jordan</div>
                  <div>AirMax</div>

                </div>
                <div className={s.dropDown_list}>
                  <h3>Kids</h3>
                  <div>Lifestyle</div>
                  <div>Jordan</div>
                  <div>AirMax</div>                  
                </div>
                <div className={s.dropDown_list}>
                  <h3>Accessories</h3>
                  <div>Lifestyle</div>
                  <div>Jordan</div>
                  <div>AirMax</div>                    
                </div>
              </div>  
            }
          </span>  
          <div></div>
      </div>
  )
}
