import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg';
import Dropdown from 'react-simple-dropdown';
import DropdownTrigger from 'react-simple-dropdown';
import DropdownContent from 'react-simple-dropdown';
import { MdArrowDropDownCircle } from "react-icons/md";
import CartLink from "./Cart/CartLink"


export default function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="vintage tech logo" className="logo"/>
      <nav>
      
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <CartLink />
            <Dropdown className="dropdown">
            <DropdownTrigger>
            <li className='toRight'><a href="#">My account <MdArrowDropDownCircle /></a></li>
            </DropdownTrigger>
            <DropdownContent className="dropdown__content">
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://www.lowcountryvalet.com/contact/">Contact</a></li>
                <li><a href="https://github-user-1111.netlify.app/">Support</a></li>
                <li><a href="https://react-beach-resort-project-1111.netlify.app/">Career</a></li>
                <li><Link to="/follow">Follow</Link></li>
                <li><a href="https://link.townandcountrymag.com/join/3oi/toc-newsletter">Newspaper</a></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </DropdownContent>
              </Dropdown>
        </ul>
      </nav>
    </header>
  )
}

//BsFolderFill
//FaChevronDown
//MdPermIdentity