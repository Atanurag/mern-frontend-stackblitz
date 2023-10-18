import React from "react";
import {Link,useParams} from "react-router-dom"
import useSWR from "swr";
const ShowBook =()=>{
let {id}=useParams();
const[singleBook,setSingleBook]=React.useState({})
let fetcher=async(url)=>{
  let fet=await fetch(url);
  if(fet.status!==200){
  let err=new Error("new error occured");
err.info=fet
  err.status=fet.status;
  throw err;
  }
  return fet.json();
}

let {data,error}=useSWR(`https://vast-tan-bandicoot-yoke.cyclic.app/books/${id}`,fetcher);
//console.log(data,"useSWRID",error);

// React.useEffect(()=>{
// fetch(`https://mern-project.spiritual-wisdo.repl.co/books/${id}`).then(e=>e.json())
// .then(e=>setSingleBook(e))
// .catch(err=>console.log(err.message))
// },[])
  return (
    <>
    <p> <Link to="/">back</Link></p>
    <p>{error?.info?.statusText}</p>
    <div style={{border:"1px solid black"}}>
      Single Book Route
      <p>id: {data?._id}</p>
      <p>Title: {data?.title}</p>
      <p>Author: {data?.author}</p>
      <p>Py: {data?.publishYear}</p>
      <p>createAt: {data?.createdAt}</p>
      <p>updatedAt: {data?.updatedAt}</p>
    </div>
    </>
  )
}
export default ShowBook;
