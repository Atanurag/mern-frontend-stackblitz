import React from "react";
import {Link ,useNavigate} from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
const CreateBook =()=>{

  const refTitle=React.useRef()
  const refAuthor=React.useRef()
  const refPublishYear=React.useRef()
  const navigate=useNavigate()
  const { isLoaded, userId, sessionId, getToken } = useAuth();
 console.log(useAuth())
const handleCreateBook=()=>{
  let postObj={
    title:refTitle.current.value,
    author:refAuthor.current.value,
    publishYear:refPublishYear.current.value,
    uniqueID:userId
  }
 //console.log(postObj)
 
  fetch(`https://vast-tan-bandicoot-yoke.cyclic.app/books/savebook/`,
  {method:"POST",
   body:JSON.stringify(postObj)
  ,headers: {
    "Content-type": "application/json; charset=UTF-8"
}}
).then(e=>e.json())
.then(e=>{console.log(e)
navigate("/")
})
.catch(err=>console.log(err.message))
}

  return (
    <>
     <p> <Link to="/">back</Link></p>
    <p>create Book</p>
     <input type="text" placeholder="title" ref={refTitle}/>
     <input type="text" placeholder="author" ref={refAuthor}/>
     <input type="date" placeholder="date" ref={refPublishYear}/>

    <button onClick={()=>{
      // console.log(refTitle.current.value,refAuthor.current.value,refPublishYear.current.value)
      handleCreateBook()  
        }}>createBook</button>


    </>
  )
}
export default CreateBook;