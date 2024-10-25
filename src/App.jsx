import React from "react";
import Login from "./components/Auth/Login";
import EmpolyeeDashboard from "./components/Dashboard/EmpolyeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect , useState, useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authdata = useContext(AuthContext);

  useEffect(() => {
   const loggedInUser = localStorage.getItem("loggedInUser");
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    // setLoggedInUserData(userData.data)
  }
  },[])

  const handleLogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));

    } else if (authdata) {
      const employee = authdata.employees.find(
        (e) => email == e.email && e.password == password
        
      );
      
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: 'employee' })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmpolyeeDashboard data={loggedInUserData} />: null)  }
    </>
  );
};

export default App;
