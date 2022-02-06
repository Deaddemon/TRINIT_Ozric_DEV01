
import * as React from 'react';
// import Divider from '@mui/material/Divider';
import {   Container , Grid ,  Box , makeStyles} from '@material-ui/core';
// import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'
 

 const useStyle = makeStyles({
     
      root:{
         
        backgroundColor:'rgba(22, 22, 34, 0.5)',
        
        fontFamily:'Oxygen',
         fontWeight:'600'
      },
      root2:{
        textDecoration: 'none',
        color: '#161622',
        fontFamily:'Oxygen',
        fontWeight:'590'

      }
    
 })
      
  

export default function Footer() {
 const classes =  useStyle();
  return (


    <footer>
      <Box 
      px={{ xs:3 , sm:10}}
      py= {{ xs:5 , sm:10}}
      className = {classes.root}

        >
        <Container maxWidth ='lg'  >

          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} >
               HELP
              </Box>

              <Box>
              <Link className={classes.root2} to="/" color="inherit">
                contact
              </Link>
              </Box>

              <Box>
              <Link className={classes.root2} to="/" color="inherit">
               support
              </Link>
              </Box>

              <Box>
              <Link className={classes.root2} to="/" color="inherit">
                Privacy
              </Link>
              </Box>

               

            </Grid>

            <Grid item xs={12} sm={4}>
              
              <Box borderBottom={1} >
               LOGIN
              </Box>

              <Box>
              <Link className={classes.root2} to="/" color="inherit">
                Register
              </Link>
              </Box>

              <Box>
              <Link className={classes.root2} to="/" color="inherit">
               Messages
              </Link>
              </Box>

              <Box>
              <Link className={classes.root2}  to="/" color="inherit">
                backup
              </Link>
              </Box>

               

            </Grid>
            <Grid item xs={12} sm={4}>
              
              <Box borderBottom={1} >
               SUPPORT
              </Box>

              <Box>
              <Link className={classes.root2} to="/" color="inherit">
                Register
              </Link>
              </Box>

              <Box>
              <Link className={classes.root2} to="/" color="inherit">
               Messages
              </Link>
              </Box>

              <Box>
              <Link className={classes.root2}  to="/" color="inherit">
                backup
              </Link>
              </Box>

               

            </Grid>

          </Grid>

        </Container>
      </Box>

    </footer>
  
  );
}
