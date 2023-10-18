// https://vast-tan-bandicoot-yoke.cyclic.app/books/mybook/user_2WVzhlujTt9qPiBc0jr6V8f2PB5
import React from "react";
import {Link} from "react-router-dom";
import useSWR from "swr";
import { useAuth ,ClerkProvider, SignIn,
  SignUp, SignedIn, SignedOut,SignOutButton } from "@clerk/clerk-react";
const Home =()=>{
  const { isLoaded, userId, sessionId, getToken } = useAuth();
//  console.log(useAuth())
const[tableData,setTableData]=React.useState([])
const fetcher=async(u)=>{
  let ft=await fetch(u);
  if(ft.status!==200){
  const err=new Error("new error occured");
  err.info= await ft.json();
  err.status= ft.status;
throw err;
  }
return ft.json();
}
//userone codeba3215@gekme.com //pass hyu@1234567
//user_2WVywD8iYdrZYC47L8rMHTGdXSB

//usertwo sarisa1341@klanze.com //pass hyu@1234567
//user_2WVzhlujTt9qPiBc0jr6V8f2PB5


//swr=stale-while-revalidate
//https://refine.dev/blog/data-fetching-next-js-useswr/#preloading-data-with-swr
const {data,error,isLoading} =useSWR(`https://vast-tan-bandicoot-yoke.cyclic.app/books/mybook/${userId}`,fetcher)

console.log(data,"useSWR",error)

React.useEffect(()=>{

  // fetch(`https://mern-project.spiritual-wisdo.repl.co/books/mybook/${775757}`).
  // then(e=>console.log(e.status)).
  // then(e=>console.log(e.status))
  // .catch(err=>console.log(err.message))

},[])
 

  return (
    <>
    <SignOutButton/>
    {error&& <p>{error.info.message}</p>}
{isLoading&&<p>Loading</p>}
    <p><Link to="/books/create">Create Book</Link></p>
    <p><Link to="/login">login</Link></p>
    <table style={{border:"2px solid red"}}>
      <thead style={{border:"2px solid red"}}>
        <tr style={{border:"2px solid red"}}>
          <th>
            Author
          </th>
          <th>
           createdAt
          </th>
          <th>
            publishYear
          </th>
          <th>
           title
          </th>
          <th>
           id
          </th>
          <th>
           edit
          </th>
          <th>
           delete
          </th>
        </tr>
      </thead>
      <tbody style={{border:"2px solid red"}}>
 {data?.data.map((e,i)=>

  ( <tr style={{border:"2px solid red"}} key={e._id}>
     <td style={{border:"2px solid black"}}>{e.author}</td>
     <td style={{border:"2px solid black"}}>{e.createdAt}</td>
     <td style={{border:"2px solid black"}}>{e.publishYear}</td>
     <td style={{border:"2px solid black"}}>{e.title}</td>
     <td style={{border:"2px solid black"}}>{e._id}</td>
     <td style={{border:"2px solid black"}}><Link to={`/books/details/${e._id}`}>details</Link></td>
     <td style={{border:"2px solid black"}}><Link to={`/books/edit/${e._id}`}>edit</Link></td>
     <td style={{border:"2px solid black"}}><Link to={`/books/delete/${e._id}`}>delete</Link></td>
   </tr>)
 )}
      </tbody>
    </table>
    </>
  )
}
export default Home;