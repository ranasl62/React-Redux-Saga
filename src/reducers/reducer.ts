// reducers.ts
import { combineReducers } from 'redux';
import { ItemActionTypes, FETCH_ITEMS_SUCCESS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, Item, UPDATE_FORM } from '../stores/action';

export interface AppState {
    items: Item[];
    currentItem: Item | null;
}

const itemsReducer = (state: AppState = {
    items: [],
    currentItem: null,
}, action: ItemActionTypes): AppState => {
    switch (action.type) {
        case FETCH_ITEMS_SUCCESS:
            return { ...state, items: action.payload };
        case ADD_ITEM:
            return { ...state, items: [...state.items, { ...action.payload, id: state.items[state.items.length - 1].id + 1 }] };
        case UPDATE_ITEM:
            return { ...state, items: state.items.map((item) => (item.id === action.payload.id ? action.payload : item)), currentItem: null };
        case DELETE_ITEM:
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
        case UPDATE_FORM:
            return { ...state, currentItem: state.items.find((item) => item.id === action.payload) || null };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    items: itemsReducer,

});

export default rootReducer;
