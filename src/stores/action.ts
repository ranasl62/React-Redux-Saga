// actions.ts
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_FORM = 'UPDATE_FORM';

export interface Item {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchItemsSuccessAction {
    type: typeof FETCH_ITEMS_SUCCESS;
    payload: Item[];
}

export interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: Item;
}

export interface UpdateItemAction {
    type: typeof UPDATE_ITEM;
    payload: Item;
}

export interface DeleteItemAction {
    type: typeof DELETE_ITEM;
    payload: number;
}

export interface UpdateFormAction {
    type: typeof UPDATE_FORM;
    payload: number;
}

export type ItemActionTypes =
    | FetchItemsSuccessAction
    | AddItemAction
    | UpdateItemAction
    | DeleteItemAction
    | UpdateFormAction;

export const fetchItems = () => ({ type: FETCH_ITEMS });
export const fetchItemsSuccess = (items: Item[]) => ({ type: FETCH_ITEMS_SUCCESS, payload: items });
export const addItem = (item: Item) => ({ type: ADD_ITEM, payload: item });
export const updateItem = (item: Item) => ({ type: UPDATE_ITEM, payload: item });
export const deleteItem = (itemId: number) => ({ type: DELETE_ITEM, payload: itemId });
export const updateItemStage = (itemId: number) => ({ type: UPDATE_FORM, payload: itemId });
