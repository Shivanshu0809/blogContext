import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import style from "../index.css"


const Blog = () => {
    const {posts, loading} = useContext(AppContext);
  return (
    <div className='flex  items-center justify-center mt-4 mb-4'>

  
    <div className='lg:w-4/12 md:w-6/12 max-sm:w-9/12 flex flex-col gap-6  ' >
        {
            loading ? (<Spinner/>):
            (
                posts.length ===0 ?
                (
                    <div className='text-2xl flex  h-[100%] items-center justify-center '><p>No Post Found</p></div>
                ):
                (
                    posts.map((post)=>(
                        <div  key={post.id}>
                            <p className='font-bold text- '>{post.title}</p>
                            <p className='text-sm font-bold text-red-600'>By <span>{post.author}</span> on <span className='text-blue-500'>{post.category} </span></p>
                            <p className='text-sm font-semibold'>Posted on {post.date}</p>
                            <p>{post.content}</p>
                            <div className='flex gap-2 flex-wrap'>
                                {
                                    post.tags.map((tag,index)=>{
                                        return <span key={index} className='text-blue-600 border border-gray-400 px-2 rounded-full bg-gray-100'> {`#${tag}`}</span>
                                    })
                                }
                            </div>
                        </div>
                    ))
                )
            )
        }
    </div>
    </div>
  )
}

export default Blog