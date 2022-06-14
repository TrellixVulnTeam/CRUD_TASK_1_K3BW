import {  Link } from 'react-router-dom'
import * as React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import {useSelector, useDispatch} from 'react-redux';
import {List, Collapse} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import actionsMenu from 'reducers/actions/menu';
import actionsNhanVien from "reducers/actions/nhavienAction";

function ListItem(){
  const userStatemenu = useSelector(state => state.menu);
	const dispatch = useDispatch();
  const open = userStatemenu.open;
  const openlevel = userStatemenu.openlevel;
  const openid = userStatemenu.openid;
  const idlevel = userStatemenu.idlevel;
  const handleClick = (id, leveldata, idcon) => {
    dispatch(actionsMenu.setIDLevel(idcon));
    leveldata==="0" ? openid===id ? dispatch(actionsMenu.setOpen(!open)) : open===false ? dispatch(actionsMenu.setOpen(!open)) :dispatch(actionsMenu.setOpen(open)) :dispatch(actionsMenu.setOpen(open));
    leveldata!=="0" ? idlevel!== idcon ? dispatch(actionsMenu.setOpenLevel(leveldata)) :dispatch(actionsMenu.setIDLevel('')):dispatch(actionsMenu.setOpenLevel(leveldata));
    dispatch(actionsMenu.setOpenID(id));
  };

  const menuitemjs = [
    {name: "Dashboah", id : '1', level : '0' , parent: '0', link : '/'},
    {name: "List-account", id : '2', level : '0' , parent: '0', link : '/listaccount'},
    {name: "List-users", id : '3', level : '0' , parent: '0', link : '/listusers'},
    {name: "Test-menu-LV1", id : '4', level : '0' , parent: '0', link : '/'},
    {name: "LV2-1", id : '5', level : '1' , parent: '4', link : '/3'},
    {name: "LV2-2", id : '6', level : '1' , parent: '4', link : '/#'},
    {name: "LV3-1-1", id : '7', level : '2' , parent: '5', link : '/#'},
    {name: "LV3-1-2", id : '8', level : '2' , parent: '5', link : '/listaccount'},
    {name: "LV3-2-1", id : '9', level : '2' , parent: '6', link : '/#'},
    {name: "Test-menu-LV1-2", id : '10', level : '0' , parent: '0', link : '/'},
    {name: "LV2-1", id : '11', level : '1' , parent: '10', link : '/3'},
    {name: "LV2-2", id : '12', level : '1' , parent: '10', link : '/#'},
    {name: "LV3-1-1", id : '13', level : '2' , parent: '11', link : '/#'},
    {name: "LV3-1-2", id : '14', level : '2' , parent: '11', link : '/listaccount'},
    {name: "LV3-2-1", id : '15', level : '2' , parent: '12', link : '/#'},
    {name: "Create QR code", id : '16', level : '0' , parent: '0', link : '/createqrcode'},

  ]
    
  function setStyle(data, level) {
    level === '0' ? dispatch(actionsMenu.setOpen(false)) : dispatch(actionsMenu.setOpen(true));
    dispatch(actionsMenu.setActiveselect(data))
    dispatch(actionsNhanVien.setPage(1));

  }
  const menuLVCha = menuitemjs.filter(item => item.level === "0");
  const menuLVCon = (itemCon) =>{
    return(menuitemjs.filter(item => item.parent === itemCon.id))
  }
  const menulink = (data) => {
    return(
      <React.Fragment>
          <Link to={data.link} className="nav-link" style={{textDecoration: "none", color: "inherit"}} >
            <ListItemButton onClick={() => setStyle(data.id , data.level)} selected={userStatemenu.activeselect === data.id}>
              <ListItemIcon ><PeopleIcon /></ListItemIcon>
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
          ( menulink(row)) 
        :(<>
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
                  (<div style={{marginLeft:"20px"}}>
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
                              <div style={{marginLeft:"20px"}}>
                                  <Link to="/listaccount" className="nav-link" style={{textDecoration: "none", color: "inherit"}}><ListItemButton>
                                    <ListItemIcon>
                                      <PeopleIcon />
                                      </ListItemIcon>
                                        <ListItemText  >{rowconLV2.name}</ListItemText>
                                    </ListItemButton>
                                  </Link>
                              </div>
                            ) 
                          )}
                        </List>
                      </Collapse>
                    </div>) 
                )}
              </List>
            </Collapse>
          </>)
    )}
    </React.Fragment>
  );
};
export default ListItem;