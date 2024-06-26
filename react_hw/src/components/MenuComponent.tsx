import React from 'react';
import SwitchComponent from "./SwitchComponent";
import {useSelector} from "react-redux";
import './MenuStyle.css'
import SwithLanguageComponent from "./SwithLanguageComponent";


interface MenuProps {
    isOpen: boolean;
    lightTheme: boolean
}

const MenuComponent: React.FC<MenuProps> = ({isOpen,lightTheme}) => {
    const photoUrl = useSelector((state:any) => state.photo.photoUrl)
    const userName = useSelector((state:any) => state.logins.login)
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <img className={'avatar_manu'} src={photoUrl} alt={`ph`}/>
            <div className={'userName'}>{userName}</div>
            <SwitchComponent/>
            <SwithLanguageComponent/>
        </div>
    );
};

export default MenuComponent;