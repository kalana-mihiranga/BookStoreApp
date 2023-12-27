import React,{useState} from 'react'
import { AppBar, Toolbar, Typography,Tabs,Tab } from '@mui/material';





const Header = () => {
    const[value,setValue]=useState();
  return (
    <div>
      <AppBar>
        <Toolbar>
        <Typography>
            
            BookStore
         </Typography>
         <Tabs sx={{ml:"auto"}}   textColor="inherit" indicatorColor="secondary"value={value} onChange={(e, val) => setValue(val)}
          >
            <Tab label= "Add Product"/>
            <Tab label= "Books"/>
            <Tab label= "About us"/>

         </Tabs>
            
        </Toolbar>

  
      </AppBar>
    </div>
  )
}

export default Header
