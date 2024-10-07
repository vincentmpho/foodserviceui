import React from 'react'
import { useState, useEffect } from "react";
import { menuItemModel } from '../../../Interfaces';

 function MenuItemList() {

  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch("https://foodserviceapi20241002165531.azurewebsites.net/api/MenuItem")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMenuItems(data.result); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);




  return (
    <div>MenuItemList</div>
  )
}


export default MenuItemList
