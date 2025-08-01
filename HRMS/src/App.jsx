import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/login';
import Home from './pages/home';
import EmployeeForm from './pages/employee';
import Dashboard from './pages/dashboard';
import ProtectedRoute from './components/utils/protectedRoute';
import Unauthorized from './components/utils/unauthorize';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/unauthorized" element={<Unauthorized/>} />
        <Route path="home" element={
          <ProtectedRoute>
             <Home />
          </ProtectedRoute>
          }
        >
          <Route path="employee" 
          element={
         <ProtectedRoute allowedRoles={["hr", "manager", "admin"]}> 
            <EmployeeForm />
          </ProtectedRoute> 
           } 
         />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App