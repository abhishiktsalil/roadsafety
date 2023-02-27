import React from 'react';
import classes from './TabNavButton.module.css';

const TabNavButton=({id, title, activeTab, setActiveTab})=>{
    
    const handleClick = ()=>{
        setActiveTab(id);
    };

    return (<button onClick={handleClick} className={activeTab===id? classes.btnActive : ""}>{title}</button>);
};

export default TabNavButton;