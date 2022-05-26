import {  Link } from 'react-router-dom'
import * as React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
// import Link from '@mui/material/Link';


function ListItem(){
  return(
      <React.Fragment>
        <Link to="/" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
              <ListItemText >Dashboard</ListItemText>
          </ListItemButton>
        </Link>
        <Link to="/listusers" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText >List-Users</ListItemText>
          </ListItemButton>
        </Link>
        <Link to="/listaccount" className="nav-link"><ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
            </ListItemIcon>
              <ListItemText  >List-Account</ListItemText>
          </ListItemButton>
        </Link>
        
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItemButton>
      </React.Fragment>
  );
}
export default ListItem;
// export const mainListItems = (
  
// );
// // export const mainListItems = (
// //   <React.Fragment>
// //     <ListItemButton>
// //       <ListItemIcon>
// //         <DashboardIcon />
// //       </ListItemIcon>
// //       <Link to='/'>da</Link>
// //         {/* <ListItemText ><a href='/'>Dashboad</a></ListItemText> */}
// //     </ListItemButton>
// //     <ListItemButton>
// //       <ListItemIcon>
// //         <ShoppingCartIcon />
// //       </ListItemIcon>
// //       <ListItemText ><a href='/listusers'>List-Users</a></ListItemText>
// //     </ListItemButton>
// //     <ListItemButton>
// //       <ListItemIcon>
// //         <PeopleIcon />
// //       </ListItemIcon>
// //       <ListItemText ><a href='/listaccount'>List-Account</a></ListItemText>
// //     </ListItemButton>
// //     <ListItemButton>
// //       <ListItemIcon>
// //         <BarChartIcon />
// //       </ListItemIcon>
// //       <ListItemText primary="Reports" />
// //     </ListItemButton>
// //     <ListItemButton>
// //       <ListItemIcon>
// //         <LayersIcon />
// //       </ListItemIcon>
// //       <ListItemText primary="Integrations" />
// //     </ListItemButton>
// //   </React.Fragment>
// // );

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );