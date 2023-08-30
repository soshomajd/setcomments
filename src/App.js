import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changenumber, changetitle, getdata } from './redux/action';
import { useEffect, useState } from 'react';


function App() {
  const[select,setselect]=useState(null)
  const[text,settext]=useState("")

  const {data,loading,error}=useSelector((state)=>state.posts);
  
  
  const dispatch=useDispatch();
  useEffect(() => {
    const data=JSON.parse(localStorage.getItem("posts"));
    if (!data?.length ) {
      
      dispatch(getdata());
    }
  
  
   
  }, [])


localStorage.setItem("s","sh");
console.log(localStorage)
  
  
  return (
    <div className="App" style={{color:"black"}} >

      
      {loading ? (<Spinner animation='border' variant={"info"}></Spinner>) :error ?<h1>{error}</h1> :
      ( data.map((item,index)=>{
        if (item.id===select) {
          return (<div><input  onChange={(e)=>settext(e.target.value)} value={text}/> <Button  onClick={()=>{dispatch(changetitle(index,text)); setselect(null)} } variant='info'>edit</Button></div>)
        }else{

          return (<p onClick={()=>{setselect(item.id) ; settext(item.title)} } key={item.id}>{item.title}</p>);
        }
      }))}
    </div>
  );
}

export default App;
