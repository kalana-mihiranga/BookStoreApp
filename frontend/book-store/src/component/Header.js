import React,{useState} from 'react'
import { AppBar, Toolbar, Typography,Tabs,Tab } from '@mui/material';
import { NavLink } from "react-router-dom";





const Header = () => {
    const[value,setValue]=useState();
  return (
    <div>
       <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
        <Typography variant="h1">
        ƊỾ

         </Typography>BOOKSTORE
         <Tabs sx={{ml:"auto"}}   textColor="inherit" indicatorColor="secondary"value={value} onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label= "Add Product"/>
            <Tab LinkComponent={NavLink} to="/books"  label= "Books"/>
        
            <Tab LinkComponent={NavLink} to="/about" label= "About us"/>

         </Tabs>
            
        </Toolbar>

  
      </AppBar>
    </div>
  )
}

export default Header
