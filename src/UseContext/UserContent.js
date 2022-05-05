import { createContext, useState } from "react";
import React from 'react';

export const  UserContent = createContext();

export const UseStates = ({children}) =>{
    const [cart, setCart] = useState([]);

    return (
        <UserContent.Provider value = {{cart, setCart}}>
            {children}
        
        
        </UserContent.Provider>
    
       
        )
};