import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='footer-cpyrt-text'>
                <p className='copyright'>Developed n Published by <Link to='mailto:avinash.tripathi7@gmail.com'>Avinash</Link> </p>
            </div> 
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Shop</Link>
                <Link className='option' to='/signin'>SignIn</Link>
            </div>   
                    
        </div>
        
    )

}

export default Footer;