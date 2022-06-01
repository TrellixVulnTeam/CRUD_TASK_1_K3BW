

const setData = (data) => {
    return{
        type: 'SET_DATA',
        payload:data ,
    }
}
const setDataNV = (data) => {
    return {
        type: 'SET_DATA_NV',
        payload: data
    }
}
const setDataPB = (data) => {
    return {
        type: 'SET_DATA_PB',
        payload: data
    }
}
const setPageLength = (data) =>{
    return{
        type: 'SET_PAGE_LENGTH',
        payload: data,
    }
}
const setPage = (data) =>{
    return{
        type: 'SET_PAGE',
        payload: data
    }
}
const setTimeOut = (data) =>{
    return{
        type: 'SET_TIMEOUT',
        payload: data,
    }
}
const setDataFormUpdate = (data) =>{
    return{
        type: 'SET_DATA_FORM_UPADTE',
        payload: data,
    }
}
const setOpen = (data) =>{
    return{
        type: 'SET_OPEN',
        payload: data,
    }
}
const accountAction = {
    setData: setData,
    setDataNV: setDataNV,
    setDataPB : setDataPB,
    setPageLoad: setPageLength,
    setPage: setPage,
    setTimeOut : setTimeOut,
    setDataFormUpdate :setDataFormUpdate ,
    setOpen: setOpen,
};

export default accountAction;