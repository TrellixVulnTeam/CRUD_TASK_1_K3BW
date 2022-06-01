const getListNhanVien = (nhanvien) => {
  return {
    type: 'GET_LIST',
    payload: nhanvien
  }
}
const setTimeout = (data) =>{
  return{
    type: 'SET_TIMEOUT',
    payload: data
  }
}
const setOpen = (data) =>{
  return{
    type: 'SET_OPEN',
    payload: data
  }
}
const setDataFormUpdate = (data) =>{
  return{
    type: 'SET_DATA_FORM_UPDATE',
    payload: data
  }
}
const setPageLength = (data) =>{
  return{
    type: 'SET_PAGELENGTH',
    payload: data
  }
}
const setPage = (data) =>{
  return{
    type: 'SET_PAGE',
    payload: data
  }
}
const actionsNhanVien = {
  getList: getListNhanVien,
  setTimeout: setTimeout,
  setOpen: setOpen,
  setDataFormUpdate: setDataFormUpdate,
  setPageLength : setPageLength,
  setPage: setPage,
}

export default actionsNhanVien;