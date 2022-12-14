import {useState,useEffect} from 'react';
import {API} from 'aws-amplify';
import {listPosts} from '../src/graphql/queries';


export default function Home() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    fetchPosts()
  },[])

  const fetchPosts=async()=>{
   const postData=await API.graphql({
     query:listPosts
   });

   setPosts(postData.data.listPosts.items);

  }
  return (<div><h1 className='text-xl font-bold underline'>My Posts</h1>
  
  {posts.map((post,index)=>{
    return(<p key={index}>{post.title}</p>)
  })}
  </div>)
}
