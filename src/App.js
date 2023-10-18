import React from 'react';
import {Routes,Route,useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import UpdateBook from "./pages/UpdateBook";
import DeleteBook from "./pages/DeleteBook";
import ClerkRoutes from "./pages/ClerkRoutes";
export default function App() {
  // github cliensecret="1e8cda0f8371f2d6b63cdff8bfe38edea8d30f51"
  return (
    <>
    <div>
      <h1>MERN stack with Clerk Auth</h1>
     {/* <Routes>
      <Route path="/books/create" element={<CreateBook />}/>
      <Route path="/books/details/:id" element={<ShowBook />}/>
      <Route path="/books/edit/:id" element={<UpdateBook/>}/>
      <Route path="/books/delete/:id" element={<DeleteBook/>}/>
      
      </Routes> */}
     
      <ClerkRoutes/>

     
    </div>

    </>
  );
}
