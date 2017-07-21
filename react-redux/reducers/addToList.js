function addToList(state=[], action){
  switch (action.type) {
    case 'ADD_LINK':
      return [...state,{
        link: action.link
      }]
      break;
    default:
      return state
  }
}

export default addToList;
