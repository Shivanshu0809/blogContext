 import React from 'react'
 import { useContext } from 'react'
 import { AppContext } from '../Context/AppContext'
 const Pagination = () => {
    const{page,handlerPageChange,totalPages,posts}= useContext(AppContext)
   return (
     <div className='flex justify-center mb-6'>
        <div className='flex justify-between  lg:w-4/12 md:w-6/12 max-sm:w-9/12 items-center'>
        <div  className='flex gap-3'>

        
            {
                page>1&& 
                (
                    <button className='border border-black px-2 rounded-sm' onClick={()=>handlerPageChange (page-1)}>Previous</button>
                )
            }
            {
                page<totalPages && 
                (
                    <button className=' border border-black px-2 rounded-sm ' onClick={()=> handlerPageChange (page+1)}>
                    Next
                    </button>
                )
            }
            </div>
            { posts.length!==0 &&
                <p>
                Page {page} of {totalPages}
            </p>
            }
          
        </div>
     </div>
   )
 }
 
 export default Pagination