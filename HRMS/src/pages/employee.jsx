import {useEffect, useState}from "react";
import Button from "../components/employees/buttons";
import { FaPlus } from "react-icons/fa";
import SearchSelect from "../components/employees/SelectSearch";
import EmployeeCard from "../components/employees/employeeCard";
import EmployeeForm from "../components/employees/employeeform";
import axios from "axios";
export default function Employee() {
const[modelform, setModelForm]  = useState(false);
const[employees, setEmployees] = useState([]);
const [editEmployee, setEditEmployee] = useState(null);
const fetchEmployees = async() => {
  const token = localStorage.getItem("token");
  try{
    const res = await axios.get("http://localhost:5000/employees",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
     setEmployees(res.data);
  } catch (err){
    console.error("failed to fetch employees", err);
  }
};
useEffect(() => {
  fetchEmployees();
 }, []);
 const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Do you want to delete the Employee ? ");
  if(!confirmDelete) return;
  const token = localStorage.getItem("token");
  try{
    await axios.delete(`http://localhost:5000/employees/${id}`,{
      headers:{
        Authorization: `Bearer ${token}`,
      },
    });
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    alert("Employee Deleted successfully");
  } catch (error) {
    console.error("Error deleting Employee: ", error);
    alert("Something went wrong while deleting. ");
  }
 }
  return (
    <>
      <div className="flex justify-between items-center pl-2 pr-2 text-gray-500">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-md">Employee Management</h3>
          <p className="text-black text-xs">
            Manage your organization employees
          </p>
        </div>

        <Button
         onClick={() =>{
           setModelForm(true);
           setEditEmployee(null);
        }} 

         icon={<FaPlus />}
         type="button">
          Add Employee
        </Button>
      </div>


      <SearchSelect />
      <EmployeeCard
       employees = {employees}
       setEditEmployee ={setEditEmployee}
       setModelForm = {setModelForm}
       handleDelete = {handleDelete}
       />
      {modelform && (
        <div className="fixed inset-0 bg-transparent bg-opacity-10 backdrop-brightness-30 flex items-center justify-center">
          <div className="bg-white rounded-md shadow-xl w-full max-w-md relative">
            <Button
              onClick={() => setModelForm(false)}
              className="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded cursor-pointer"
            >
              ✕
            </Button>
            <EmployeeForm 
               setEmployees={setEmployees}
               setModelForm={setModelForm}
               editEmployee={editEmployee}
               setEditEmployee={setEditEmployee}
                />
          </div>
        </div>
      )}
    </>
  );
}