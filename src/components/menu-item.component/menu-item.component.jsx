import React from 'react';
import './menu-item.component.style.scss'

const MenuItem = ({title,image,large}) => (
    <div
    style = {{
        backgroundImage : `url(${image})`
    }} 
    className={`${large} menu-item`}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem