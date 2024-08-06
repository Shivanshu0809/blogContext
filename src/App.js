import Header from "./Components/Header";
import Blogs from "./Components/Blog";
import Pagination from "./Components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
},[]);
  return <div className="w-[100%] ">

     <Header/>
    <Blogs/>
    <Pagination/>
  </div>;
}
