// AddItemForm.tsx
import React, { useEffect, useState } from "react";
import { Item } from "../stores/action";

interface ItemFormProps {
  item?: Item | null;
  isUpdate?: boolean;
  action: (item: Item) => void | null;
}

const ItemForm = (props: ItemFormProps) => {
  const [newItem, setNewItem] = useState({
    id: 0,
    title: "",
    completed: false,
  });

  useEffect(() => {
    if (props.item && props.isUpdate) {
      setNewItem(props.item);
    }
  }, [props.item, props.isUpdate]);

  const handleAddItem = () => {
    props.action(newItem);
    setNewItem({ id: 0, title: "", completed: false });
  };

  const setNewItemTitle = (title: string) => {
    setNewItem({ ...newItem, title });
  };

  const setNewItemCompleted = (completed: string) => {
    setNewItem({ ...newItem, completed: completed === "on" ? false : true });
  };

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control d-inline-block w-75"
              id="task"
              aria-describedby="emailHelp"
              value={newItem.title}
              onChange={(e) => setNewItemTitle(e.target.value)}
              placeholder="Enter item title"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={newItem.completed ? "on" : "off"}
              id="itemCompleted"
              onChange={(e) => setNewItemCompleted(e.target.value)}
              checked={newItem.completed}
            />
            <label className="form-check-label" htmlFor="itemCompleted">
              Is Completed
            </label>
          </div>
        </div>
        <div className="col-md-2">
          <button
            className={props.isUpdate ? "btn btn-warning" : "btn btn-primary"}
            onClick={handleAddItem}
          >
            {props.isUpdate ? "Update Item" : "Add Item"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;
