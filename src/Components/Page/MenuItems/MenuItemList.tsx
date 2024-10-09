import React from 'react'
import { useState, useEffect } from "react";
import { menuItemModel } from '../../../Interfaces';
import MenuItemCard from './MenuItemCard';

 function MenuItemList() {

  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch("https://foodserviceapi20241002165531.azurewebsites.net/api/MenuItem")
      .then((response)=> response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data);
      });
  }, []);




  return (
    <div className="container row">
      {menuItems.length>0 && 
      menuItems.map((menuItem, index)=> (
        <MenuItemCard menuItem={menuItem} key={index} />
      ))}
      
      </div>
  );
}


export default MenuItemList
