const initialState = {
    items: [],
    isLoaded: true
}


const pizzas = (state = initialState, action) => {


    switch (action.type) {
        case 'SET_PIZZAS':

            return (
                {
                    ...state,
                    items: action.payload,
                    isLoaded: false
                }
            );

        case 'SET_SETLOADED':
                return (
            {
                ...state,
                items: action.payload,
               
            }
        );

        default:
          return state;
    }


}

export default pizzas