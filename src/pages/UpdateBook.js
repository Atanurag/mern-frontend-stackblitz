import React from "react";
import {Link ,useNavigate,useParams} from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
const UpdateBook =()=>{

  const refTitle=React.useRef()
  const refAuthor=React.useRef()
  const refPublishYear=React.useRef()
  const navigate=useNavigate()
  const {id}=useParams()
  const { isLoaded, userId, sessionId, getToken } = useAuth();
React.useEffect(()=>{
fetch(`https://vast-tan-bandicoot-yoke.cyclic.app/books/${id}`).then(e=>e.json()).then(e=>{
  refTitle.current.value=e?.title
  refAuthor.current.value=e?.author
  refPublishYear.current.value=e?.publishYear
}).catch(err=>console.log(err.message))
},[])
const handleEditBook=()=>{
  let postObj={
    title:refTitle.current.value,
    author:refAuthor.current.value,
    publishYear:refPublishYear.current.value,
    uniqueID:userId
  }
  //console.log(postObj)

  fetch(`https://vast-tan-bandicoot-yoke.cyclic.app/books/${id}`,
  {method:"PUT",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
},
  body:JSON.stringify(postObj),
  
}
).then(e=>e.json())
.then(e=>{console.log(e)
navigate("/")
})
.catch(err=>console.log(err.message))
}

  return (
    <>
     <p> <Link to="/">back</Link></p>
    <p>edit Book</p>
     <input type="text" placeholder="title" ref={refTitle}/>
     <input type="text" placeholder="author" ref={refAuthor}/>
     <input type="date" placeholder="date" ref={refPublishYear}/>

    <button onClick={()=>{
      // console.log(refTitle.current.value,refAuthor.current.value,refPublishYear.current.value)
      handleEditBook()
    }}>createBook</button>


    </>
  )
}
export default UpdateBook;