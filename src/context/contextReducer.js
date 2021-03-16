export const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTIONS':
            transactions = state.filter(t => t.id !== action.payload);

            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
            break;
        case 'ADD_TRANSACTIONS':
            transactions = [action.payload, ...state];

            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
            break;

        default:
            return state;
            break;
    }
}
