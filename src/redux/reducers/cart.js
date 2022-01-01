const initialState = {
    items: {},
    // *Делаем объектом что бы передавать целый объект из json
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => (obj.price + sum), 0)



const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const cart = (state = initialState, action) => {

    switch (action.type) {


        case 'ADD_PIZZAS_TO_CART': {
            const currentItemsItems = !state.items[action.payload.id] ?
                [action.payload] :
                [
                    ...state.items[action.payload.id].items,
                    action.payload
                ];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItemsItems,
                    totalPrice: getTotalPrice(currentItemsItems)
                },
            }

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');


            // const arrPizzas = [].concat(...Object.values(newItems).map((obj) => obj.items));


            return {
                ...state,
                items: newItems,
                // totalCount: [].concat.apply([] , Object.values(newItems)).length

                // totalCount: Object.values(newItems).flat(Infinity).length
                // totalCount: arrPizzas.length,
                // totalPrice: arr.reduce((sum, obj) => (obj.size === 26 ? obj.price + sum : obj.size === 30 ?  obj.price + 150 + sum : obj.price + 250 + sum), 0)
                // totalPrice: getTotalPrice(arrPizzas)
                // totalCount:  [].concat(...Object.values(newItems.price)).length,
                totalCount,
                totalPrice


            }

        }


        case 'REMOVE_CART_ITEM':
            const delItems = {
                ...state.items
            }

            const currentPrice = delItems[action.payload].totalPrice;
            const currentCount = delItems[action.payload].items.length;

            delete delItems[action.payload]
            return {
                ...state,
                items: delItems,
                totalPrice: state.totalPrice - currentPrice,
                totalCount: state.totalCount - currentCount,

            }


        case 'PLUS_CART_ITEM':


            {

                const newObject = [
                    ...state.items[action.payload].items,
                    state.items[action.payload].items[0]
                ];

                const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newObject,
                        totalPrice: getTotalPrice(newObject),


                    },

                }

                const totalCount = getTotalSum(newItems, 'items.length');
                const totalPrice = getTotalSum(newItems, 'totalPrice');
                // const price = state.items[action.payload].totalPrice

                return {
                    ...state,
                    items: newItems,
                    totalCount,
                    totalPrice



                }
            }


        case 'MINUS_CART_ITEM':

            {
                const oldItems = state.items[action.payload].items;
                const newObj = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
                
                // ^ Не даёт массиву стать меньше 1го , сравнивает со старым массивом данных
                const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newObj,
                        totalPrice: getTotalPrice(newObj),


                    },

                }
                const totalCount = getTotalSum(newItems, 'items.length');
                const totalPrice = getTotalSum(newItems, 'totalPrice');

                return {
                    ...state,
                    items: newItems,
                    totalCount,
                    totalPrice


                }
            }




        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }




        default:
            return state;
    }


}

export default cart