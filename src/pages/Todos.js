import { useContext, useEffect } from "react"
import TodoContext from "../context/TodoContext"
import axios from 'axios';
const Todos=()=>{
   const todoContext=useContext(TodoContext)
   useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(res=>res.json())
    // .then(data=>{
    //  todoContext.dispatch({type:'SET_TODOS',payload:data})
    // })
   async function fetchData(){
      try {
        const res= await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(res.data)
      } catch (err) {
        console.log(err.message);
        
      }
    }
    fetchData()
   },[])
    return(
        <>
        {/* <h1>todos page {todoContext}</h1> */}
     
        </>
    )
}
export default Todos