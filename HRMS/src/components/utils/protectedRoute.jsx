import{Navigate } from "react-router-dom";
import Unauthorized from "./unauthorize";

export default function ProtectedRoute({children, allowedRoles = [] }){
    const token = localStorage.getItem("token");
   // const user = JSON.parse(localStorage.getItem("user"));
    //console.log(user.email);
    const userRaw = localStorage.getItem("user");
    const user = userRaw ? JSON.parse(userRaw) : null;
         
    if(!token || !user) {
        return <Navigate to = "/"/>;
    
    }
    if(allowedRoles.length > 0 && !allowedRoles.includes(user.role)){
        return<Unauthorized/>;
    }
    return children;
}