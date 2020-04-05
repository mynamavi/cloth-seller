import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) =>(
    <div className={`${size} menu-item`} 
        onClick ={()=> history.push(`${match.url}${linkUrl}`)} >
    <div 
        className='bk-image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
    />
        <div className="content">
            <h2 className='title'>{title}</h2>
            <span className='subtitl1e'>Shop Now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);