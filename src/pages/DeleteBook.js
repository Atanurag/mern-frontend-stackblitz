import React from "react";
import {Link,useNavigate,useParams} from "react-router-dom";

const DeleteBook =()=>{
let {id}=useParams()
let navigate=useNavigate()
const handleDeleteBook=()=>{
fetch(`https://vast-tan-bandicoot-yoke.cyclic.app/books/${id}`,{method:"DELETE"})
.then(()=>navigate("/"))
.catch(err=>console.log(err.message));
}
  return (
    <>
    <Link to="/">Back</Link>
    <button onClick={()=>{
      handleDeleteBook()
    }}>Delete Book</button>
    </>
  )
}
export default DeleteBook;