import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from "@material-ui/core/Button";
import actionsSlibar from "../../../reducers/actions/sibarAction";



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
		}else dispatch(actionsSlibar.setsibar(drak))
	};
    return(
		<>
			<Button  onClick={toggleDarkTheme} >
				{userState.theme.palette.mode === 'dark' ? <Brightness7Icon  style={{color : '#fff'}}/> : <Brightness4Icon style={{color : '#fff'}}/>}
			</Button>
		</>
	)
};

export default Darklight;
