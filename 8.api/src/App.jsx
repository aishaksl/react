import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // GET // fetching data from the database
  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/posts");
    console.log(response.data);
  };

  const getUserById = async (id) => {
    const response = await axios.get(`http://localhost:3000/posts/${id}`);
    console.log(response.data);
  };

  // POST // adding data to the database

  const createUser = async (newUser) => {
    const response = await axios.post(`http://localhost:3000/posts`, newUser);
    console.log(response.data);
  };

  // PUT // updating data

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`http://localhost:3000/posts/${userId}`, updatedUser);
  };

  // DELETE // deleting data

  const deleteUserById = async (userId) => {
    const response = await axios.delete(
      `http://localhost:3000/posts/${userId}`
    );
    console.log(response.data);
  };

  useEffect(() => {
    getUsers();
    getUserById(2);

    const newUser = {
      // id is automatically assigned by the API
      author: "typicode",
      title: "json-server",
    };
    createUser(newUser);

    const updatedUser = {
      author: "aaa",
      title: "aaa",
    };
    updateUser("2", updatedUser);

    deleteUserById("1");
  }, []);

  return <></>;
}

export default App;
