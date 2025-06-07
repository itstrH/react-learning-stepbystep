import { useState } from 'react'
import './App.css'

function App() {
  // khoi tao state duoi dang object de quan ly nhieu truong input
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  //hàm xử lý thay đổi dữ liệu khi nhập vào input
  const handleChange = (event) => { 
    const {name, value} =  event.target;
    // setUser((prevUser) => ({
    //   ...prevUser,
    //   [name]: value,
    // }));
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      }
    })
  };

  return (
    <>
      <h2>Cập nhập thông tin cá nhân</h2>
      <label htmlFor="">
        Họ và tên:
        <input name="fullName" type="text" value={user.fullName} onChange={handleChange}/>  
      </label>
      <br />
      <label htmlFor="">
        Email:
        <input name="email" type="text" onChange={handleChange}/>  
      </label>
      <h3>Họ và tên: {user.fullName}</h3>
      <h3>Email: {user.email}</h3>
    </>
  )
}

export default App
