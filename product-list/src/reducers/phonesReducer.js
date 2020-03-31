const prevState = {
    phones: [{
        id: 1,
        model: 'honor' 
      }]
};

export default(state=prevState,action)=>{
    switch (action.type) {
        case 'UPDATE_PHONES':
            return { ...state,
                phones: action.payload };
        case 'ADD_PHONES':
            return { ...state,
                phones: [...state.phones, action.payload] 
            };
        default:
            return state;
    }
};