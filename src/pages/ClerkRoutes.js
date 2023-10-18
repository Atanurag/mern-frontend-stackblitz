import React from "react"
import Home from "./Home";
import CreateBook from "./CreateBook";
import ShowBook from "./ShowBook";
import UpdateBook from "./UpdateBook";
import DeleteBook from "./DeleteBook";
import {Routes,Route,useNavigate,Link} from "react-router-dom";
import { ClerkProvider, SignIn,
  SignUp, SignedIn, SignedOut,SignOutButton } from "@clerk/clerk-react";
const ClerkRoutes =()=>{
  const navigate = useNavigate();
  const clerkPubKey ="pk_test_YXB0LXBpZ2xldC0yMC5jbGVyay5hY2NvdW50cy5kZXYk";
  return(
  <>
   <ClerkProvider publishableKey={clerkPubKey}  navigate={(to) => navigate(to)}>
      <Routes>
      <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />

        <Route path="/" element={<>
        <SignedIn><Home/></SignedIn> 
         <SignedOut>signout <Link to="/sign-up"> signup</Link> <Link to="/sign-in"> signin</Link></SignedOut>
        </>}/>

      <Route path="/books/create" element={
      <>
        <SignedIn><CreateBook /></SignedIn> 
         <SignedOut>signout <Link to="/sign-up"> signup</Link> <Link to="/sign-in"> signin</Link></SignedOut>
        </>
      }/>

        {/* <Route
          path="/sign-out/*"
          element={<SignOutButton/>}
        /> */}
      <Route path="/books/details/:id" element={<><SignedIn><ShowBook /></SignedIn>
        <SignedOut>signout <Link to="/sign-up"> signup</Link> <Link to="/sign-in"> signin</Link></SignedOut></>}/>

      <Route path="/books/edit/:id" element={<><SignedIn><UpdateBook/></SignedIn>  
      <SignedOut>signout <Link to="/sign-up"> signup</Link> <Link to="/sign-in"> signin</Link></SignedOut></>}/>

      <Route path="/books/delete/:id" element={<><SignedIn><DeleteBook/></SignedIn>
        <SignedOut>signout <Link to="/sign-up"> signup</Link> <Link to="/sign-in"> signin</Link></SignedOut></>}/>
      
        </Routes>
  </ClerkProvider>
  </>
  )
}
export default ClerkRoutes;

 
