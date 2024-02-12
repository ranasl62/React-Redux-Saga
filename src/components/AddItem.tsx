// AddItemForm.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { Item, addItem } from "../stores/action";
import ItemForm from "./ItemForm";

const AddItemForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item: Item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <h2 className="mb-3">Add New Item</h2>
      <ItemForm item={null} isUpdate={false} action={handleAddItem} />
    </div>
  );
};

export default AddItemForm;
