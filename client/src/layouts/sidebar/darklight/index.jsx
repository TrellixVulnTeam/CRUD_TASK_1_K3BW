import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Brightness7, Brightness4} from '@mui/icons-material';
import actionsSlibar from "reducers/actions/sibarAction";
import IconButton from '@mui/material/IconButton';


function Darklight(){
	const drak = {
		palette: {
			mode: 'dark',
		  },
	}

	const light = {
		palette: {
			mode: 'light',
		  },
	}
	
	const userState = useSelector(state => state.sibar);
	const dispatch = useDispatch();
	const toggleDarkTheme = () => {
		if(userState.theme.palette.mode === 'dark'){
			dispatch(actionsSlibar.setsibar(light))
			localStorage.setItem('darklight','light');
		}else{
			dispatch(actionsSlibar.setsibar(drak));
			localStorage.setItem('darklight','dark');
		} 
	};
    return(
		<>
			<IconButton  onClick={toggleDarkTheme} style={{boxShadow:"none"}}>
				{userState.theme.palette.mode === 'dark' ? <Brightness7  style={{color : '#fff'}}/> : <Brightness4 style={{color : '#fff'}}/>}
			</IconButton>
		</>
	)
};

export default Darklight;
