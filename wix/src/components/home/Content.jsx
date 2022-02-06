

import * as React from 'react';
import { styled , Grid , Paper , Box , makeStyles , Typography } from '@material-ui/core';
import blocks from './blocks.png'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


 const useStyle = makeStyles( (theme)=>{
     return{
      
      image:{

      
          width: '100%',
          height: 'auto'

         

       
      }
    }
 })
export default function RowAndColumnSpacing() {
  const classes =  useStyle();
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container  Spacing={5}  >
        <Grid item xs={6} sm={4}>
          <Item>
          <Box   >
               
                       <Typography variant='h3' style={{paddingBottom:'2%'}}>Design and Build</Typography>
          </Box>
          <Box>
             <Typography>  nsectet rem faucibus. Integerimpnec leo eu facilisis. Nam eu interdum nulla. In a est at lacus pretium venenatis. Proin bibendummolestie varius. Maecenas sollicitudin metus vitae dui fermentum viverra.
 
  Sed a congue nisl. Maecenas non laoreet purus. Sed vnsectet rem faucibus. Integer imperdiet nec leo eu facilisis. Nam eu interdum nulla. In a est v               </Typography>
             
              </Box>
          </Item>
        </Grid>

        <Grid item xs={6} sm={4}>
          <Item>
          <Box>
           <img className={classes.image} src={blocks} alt='block' />
           </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

// import * as React from 'react';
// // import Divider from '@mui/material/Divider';
// import {   Container , Grid ,  Box , makeStyles ,Typography} from '@material-ui/core';
// // import Stack from '@mui/material/Stack';
// import {Link} from 'react-router-dom'
// import blocks from './blocks.png'

//  const useStyle = makeStyles( (theme)=>{
//      return{
//       root:{
         
//          backgroundColor:'white',
//          fontFamily: 'Oxygen',
        

        
         
//       },
//       root2:{
//         textDecoration: 'none',
//         color: '#161622',
         

//       },
//       image:{

//         [theme.breakpoints.down(1025)]:{
//           width: '100%',
//           height: 'auto'

//         }

       
//       }
//     }
//  })
      
  

// export default function Footer() {
//  const classes =  useStyle();
//   return (


//     <footer>
//       <Box 
//       px={{ xs:2, sm:10}}
//       py= {{ xs:5 , sm:10}}
//       className = {classes.root}

//         >
//         <Container maxWidth ='lg'  >

//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={4}>
//               <Box   >
               
//               <Typography variant='h3' style={{paddingBottom:'2%'}}>Design and Build</Typography>
//               </Box>

//               <Box>
//                 <Typography>  nsectet rem faucibus. Integerimpnec leo eu facilisis. Nam eu interdum nulla. In a est at lacus pretium venenatis. Proin bibendummolestie varius. Maecenas sollicitudin metus vitae dui fermentum viverra.
 
//  Sed a congue nisl. Maecenas non laoreet purus. Sed vnsectet rem faucibus. Integer imperdiet nec leo eu facilisis. Nam eu interdum nulla. In a est v
//                </Typography>
             
//               </Box>

               

//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Box>
//                 <img className={classes.image} src={blocks} alt='block' />
//               </Box>
               
//           </Grid>
//           </Grid>

//         </Container>
//       </Box>

//     </footer>
  
//   );
// }
