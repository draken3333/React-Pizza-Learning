export const setSortBy = (name) => (
    {
        type: 'SET_SORT_BY',
        payload: name
    }
);


export const setCategoryBy = (index) => (
    {
        type: 'SET_CATEGORY',
        payload: index
    }
);

