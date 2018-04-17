const initialState = {
  currentPage:'dashboard'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    default:
      return state;
  }
}