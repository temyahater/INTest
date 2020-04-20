const prevState = {
    phones: []
};

export default(state=prevState,action)=>{
    switch (action.type) {
        case 'ADD_PHONE':
            return { ...state,
                phones: [ ...state.phones, action.payload ] };
        case 'DELETE_PHONE':
            return { ...state,
                phones: state.phones.filter(el=>{
                   return el.id!=action.payload;
                })
            };
        default:
            return state;
    }
};