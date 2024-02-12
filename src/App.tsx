// App.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./reducers/reducer";
import { fetchItems } from "./stores/action";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import UpdateItem from "./components/UpdateItem";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const itemsReducer = useSelector((state: AppState) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="m-5">
      <h1 className="text-center mb-3">CRUD App</h1>
      {
        // @ts-ignore
        itemsReducer.currentItem ? <UpdateItem /> : <AddItem />
      }

      <ItemList
        items={
          // @ts-ignore
          itemsReducer.items
        }
      />
    </div>
  );
};

export default App;
