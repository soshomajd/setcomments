import axios from "axios"
import { loading,success,failed } from "../constants";

export const changenumber=(x)=>(dispatch,getState)=> {
    dispatch({type:"changenumber",payload:getState().number+x})
}


export const getdata=()=> async (dispatch,getState)=>{
    dispatch({type:loading,payload:{data:[],loading:true,error:""}})

    try {
           const{data}=await axios("http://jsonplaceholder.typicode.com/posts")
           dispatch({type:success,payload:{data:[...data],loading:false,error:""}})
           localStorage.setItem("posts", JSON.stringify(data))
           
    } catch (error) {
        console.log(error)
        dispatch({type:failed,payload:{data:[],loading:false,error:" can not get data from server"}})

    }
};

export const changetitle =(index,text)=>(dispatch,getState)=>{
     const posts=JSON.parse( JSON.stringify(getState().posts.data));
     
           
     posts[index].title=text;
     dispatch({type:"changetitle",  payload:{ loading:false,error:"",data:[...posts]}}); 
     localStorage.setItem("posts", JSON.stringify(posts))
}



