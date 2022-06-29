import React,{useEffect, useState} from 'react'
import { client } from '../contentful/client'

const Blog = () => {
    const [articles,SetArticles]=useState([])
    useEffect(()=>{
        client.getEntries().then((res)=>{
             SetArticles(res.items)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>Blog</div>
  )
}

export default Blog