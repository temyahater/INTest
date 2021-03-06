const prevState = {
    loading: false,
    phones: [],
    sort: 'def'
};

export default(state=prevState,action)=>{
    switch (action.type) {
        case 'UPDATE_PHONES':
            return { ...state,
                phones: action.payload, loading: true };
        case 'ADD_PHONES':
            return { ...state,
                phones: [...state.phones, action.payload] 
            };
        case 'SET_LOADING':
            return {
                ...state, loading: action.payload
            };
        case 'UPDATE_SORT':
            return { ...state,
                sort: action.payload };
        default:
            return state;
    }
};