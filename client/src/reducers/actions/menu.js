

const setActiveselect = (data) => {
    return{
        type: 'GET_ACTIVESELECT',
        payload:data ,
    }
}
const setOpen = (data) => {
    return{
        type: 'GET_OPEN',
        payload:data ,
    }
}
const setOpenID = (data) => {
    return{
        type: 'GET_OPENID',
        payload:data ,
    }
}
const setOpenLevel = (data) => {
    return{
        type: 'GET_OPENLEVEL',
        payload:data ,
    }
}
const setIDLevel = (data) => {
    return{
        type: 'GET_IDLEVEL',
        payload:data ,
    }
}
const menu = {
    setActiveselect: setActiveselect,
    setOpen : setOpen,
    setOpenID : setOpenID,
    setOpenLevel : setOpenLevel,
    setIDLevel : setIDLevel,

};

export default menu;