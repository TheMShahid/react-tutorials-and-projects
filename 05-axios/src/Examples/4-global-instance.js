import axios from "axios";
import { useEffect } from "react";

const productsURL = "https://course-api.com/react-store-products";
const randomUserURL = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp = await axios(productsURL);
      const resp2 = await axios(randomUserURL);
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2>global instance</h2>;
};
export default GlobalInstance;
