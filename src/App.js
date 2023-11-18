
import './App.css';
import { useState } from 'react';
import FilteredUsers from './FilteredUsers';

function App() {

  const [UserList, setUserList] = useState([
    {
      id: 1,
      name: "Taiyab"
    },
    {
      id: 2,
      name: "Abhishek"
    },
    {
      id: 3,
      name: "Ravi"
    },
    {
      id:4,
      name: "Amit"
    }
  ]);

  return (
    <>
    
      <FilteredUsers UserList = {UserList}/>
    
    </>
  );
}

export default App;
