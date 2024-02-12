// ItemList.jsx
import React from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Item, deleteItem, updateItemStage } from "../stores/action";

const ItemList = ({ items }: { items: Item[] }) => {
  const dispatch = useDispatch();

  const handleUpdateAction = (itemId: number) => {
    dispatch(updateItemStage(itemId));
  };

  const handleDelete = (itemId: number) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: Item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed ? "Yes" : "No"}</td>
            <td>
              <Button
                variant="info"
                onClick={() => handleUpdateAction(item.id)}
              >
                Update
              </Button>{" "}
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ItemList;
