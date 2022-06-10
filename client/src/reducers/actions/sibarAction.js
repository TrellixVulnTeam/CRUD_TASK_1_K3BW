
  const setsibar = (data) =>{
    return{
      type: 'GET_DRAK',
      payload: data
    }
  }
  const actionsSlibar = {
    setsibar: setsibar,
  }
  
  export default actionsSlibar;