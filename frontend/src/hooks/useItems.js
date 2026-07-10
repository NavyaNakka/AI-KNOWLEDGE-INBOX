import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

function useItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const res = await axios.get(`${API}/items`);

      setItems(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return {
    items,
    loading,
    fetchItems,
  };
}

export default useItems;