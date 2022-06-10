import {  Link } from 'react-router-dom'
import * as React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import {useSelector, useDispatch} from 'react-redux';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function ListItem(){
  const userState = useSelector(state => state.sibar);
	const dispatch = useDispatch();

  
    const [open, setOpen] = React.useState(false);
    const [openlevel, setOpenLevel] = React.useState('');
    const [openid, setOpenID] = React.useState('');
    const [idlevel, setIDLevel] = React.useState('');
  
    const handleClick = (id, leveldata, idcon) => {
      setIDLevel(idcon)
      leveldata==="0" ? openid===id ? setOpen(!open) : open===false ? setOpen(!open) :setOpen(open) :setOpen(open);
      leveldata!=="0" ? idlevel!== idcon ? setOpenLevel(leveldata) :setIDLevel(''):setOpenLevel(openlevel);
      setOpenID(id)
    };
    const menuitemjs = [
      {name: "Dashboah", id : '1', level : '0' , parent: '0', link : '/'},
      {name: "List-account", id : '2', level : '0' , parent: '0', link : '/listaccount'},
      {name: "List-users", id : '3', level : '0' , parent: '0', link : '/listusers'},
      {name: "Test-menu-LV1", id : '4', level : '0' , parent: '0', link : '/'},
      {name: "LV2-1", id : '5', level : '1' , parent: '4', link : '/3'},
      {name: "LV2-2", id : '6', level : '1' , parent: '4', link : '#'},
      {name: "LV3-1-1", id : '7', level : '2' , parent: '5', link : '#'},
      {name: "LV3-1-2", id : '8', level : '2' , parent: '5', link : '#'},
      {name: "LV3-2-1", id : '8', level : '2' , parent: '6', link : '#'},
    ]

    const menuLVCha = menuitemjs.filter(item => item.level === "0");
    // console.log(menuLVCha.map((row) => console.log(row)));
    // console.log("kiemtracon", menuLVCha)

    const menuLVCon = (itemCon) =>{
      return(menuitemjs.filter(item => item.parent === itemCon.id))
    }
    const menulink = (data) => {
      return(
        <React.Fragment>
            <Link to={data.link} className="nav-link" style={{textDecoration: "none", color: "inherit"}}>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
              </ListItemIcon>
                <ListItemText  >{data.name}</ListItemText>
              </ListItemButton>
            </Link> 
        </React.Fragment>
      )
    }

  return(
      <React.Fragment>
        {
          
          menuLVCha.map((row) => 
              menuLVCon(row).length === 0 ?
              (
                menulink(row)
              ) 
            :(
              <>
                <ListItemButton button onClick={() => handleClick(row.id, row.level)} >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={row.name} />
                  {open && openid === row.id ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open && openid === row.id} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  {menuLVCon(row).map((rowcon) => 
                    menuLVCon(rowcon).length === 0 ?
                    (
                      <div style={{marginLeft:"20px"}}>
                          {menulink(rowcon)}
                      </div>
                    ):
                    (
                      <>
                      <div style={{marginLeft:"20px"}}>
                      <ListItemButton button onClick={() => handleClick(rowcon.parent, rowcon.level, rowcon.id)}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={rowcon.name} />
                  {open && idlevel === rowcon.id ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openlevel !== "" && idlevel === rowcon.id} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {menuLVCon(rowcon).map((rowconLV2) => 
                            menuLVCon(rowconLV2).length === 0 ?
                            (
                              <div style={{marginLeft:"20px"}}>

                                  {menulink(rowconLV2)}
                              </div>
                            ):
                            (
                              <>
                              <div style={{marginLeft:"20px"}}>
                                  <Link to="/listaccount" className="nav-link" style={{textDecoration: "none", color: "inherit"}}><ListItemButton>
                                    <ListItemIcon>
                                      <PeopleIcon />
                                      </ListItemIcon>
                                        <ListItemText  >{rowconLV2.name}</ListItemText>
                                    </ListItemButton>
                                  </Link>
                              </div>
                              </>
                            ) 
                          )}
                        </List>
                </Collapse>
                      </div>
                          
                      </>
                    ) 
                  )}
                        </List>
                  
                </Collapse>
              </>
            )
        )}
       </React.Fragment>
  );
};
export default ListItem;