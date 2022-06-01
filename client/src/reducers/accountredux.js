
const initialState = {
    data: [],
    timeout: true,
    page: 1,
    pagelength: '',
    dataNV: '',
    dataPB: '',
    dataformupdate: [],
    open: false,
};

function accountredux(state = initialState, action){
    switch(action.type){
        case 'SET_DATA':
            return{
                ...state,
                data: action.payload,
                
            }
        case 'SET_DATA_NV':
            return {
                ...state,
                dataNV: action.payload,
            }
        case 'SET_DATA_PB':
            return {
                ...state,
                dataPB: action.payload,
            }
        case 'SET_PAGE_LENGTH':
            return{
                ...state,
                pagelength: action.payload
            }
        case 'SET_PAGE':
            return{
                ...state,
                page: action.payload,
            }
        case 'SET_TIMEOUT':
            return{
                ...state,
                timeout: action.payload,
            }
        case 'SET_DATA_FORM_UPADTE':
            return{
                ...state,
                dataformupdate: action.payload,
            }
        case 'SET_OPEN':
            return{
                ...state,
                open: action.payload,
            }

        default: return state;
    };

};

export default accountredux;
