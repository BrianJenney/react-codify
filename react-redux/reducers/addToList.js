function addToList(state=[], action){
  switch (action.type) {
    case 'ADD_LINK':
    console.log(action.link)
      return [...state]
      break;
    default:
      return state
  }
}

export default addToList;
