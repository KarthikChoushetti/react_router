import React, { useEffect, useState } from "react";
function Github(){
    const [data,setData]=useState([])
    const [url,setUrl]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/karthikchoushetti')
        .then(res=>res.json())
        .then(data=>{
            setData(data.followers)
            setUrl(data.avatar_url)
        })
        
    },[])
    return(
        <>
        <div>GithubFollowers:{data}</div>
        <div>Gitimage: <img src={url} alt="" /></div>
       
        </>
    )
}
export default Github