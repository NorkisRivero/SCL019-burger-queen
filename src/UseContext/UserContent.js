import { createContext, useState } from "react";
import React from 'react';

export const  UserContent = createContext();

export const UseStates = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [name, setName] = useState('');
    const [table, setTable] = useState('');

    return (
        <UserContent.Provider value = {{cart, setCart, name, setName, table, setTable}}>
            {children}
        
        
        </UserContent.Provider>
    
       
        )
};