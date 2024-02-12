// AddItemForm.tsx
import React from "react";
import ItemForm from "./ItemForm";
import { Item } from "../stores/action";
import { useSelector, useDispatch } from "react-redux";

const UpdateItem = () => {
  const itemReducer = useSelector((state: any) => state.items);
  const dispatch = useDispatch();

  const item = itemReducer.currentItem;
  const update = (item: Item) => {
    dispatch({ type: "UPDATE_ITEM", payload: item });
  };

  return (
    <div>
      <h2 className="mb-3">Update Item</h2>
      <ItemForm item={item} isUpdate={true} action={update} />
    </div>
  );
};

export default UpdateItem;
