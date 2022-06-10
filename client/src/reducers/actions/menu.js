

const setActiveselect = (data) => {
    return{
        type: 'GET_ACTIVESELECT',
        payload:data ,
    }
}

const menu = {
    setActiveselect: setActiveselect,
};

export default menu;