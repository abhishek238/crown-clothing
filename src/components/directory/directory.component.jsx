import React from 'react';

const MenuItem = ({title}) => (
    <div className="menu-item">
        <div className="content">
            <div className="title">{title}</div>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

export  default MenuItem;