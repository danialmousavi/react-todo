import { useContext, useEffect, useState } from "react"
import TodoContext from "../context/TodoContext"
import FilterTodos from "../components/todo/filterTodos"
import CreateTodo from "../components/todo/CreateTodo"

const Todos=()=>{
   const {todos,getTodos,error}=useContext(TodoContext)
   const [loading,setLoading]=useState(true)

   useEffect(()=>{
      const fetchData= async()=>{
       await getTodos()
    setLoading(false);
      }
      fetchData()
   },[getTodos])
   
    return(
      <div className="container">
        <div className="row g-3">
        <CreateTodo/>
          <hr />
        <FilterTodos/>
        {error&&<div>{error}</div>}
        {loading&&<div className="col-md-12 text-center"><div className="spinner-border mt-5"></div></div>}
        {todos&& todos.map(todo=>(
          <div className=" col-sm-6 col-md-4" key={todo.id}>
            <div className={todo.completed?"card m-2 bg-light":"card m-2"}>
              <div className="card-body d-flex justify-content-between align-items-center ">
                <div>{todo.completed?<del>{todo.title}</del>:<span>{todo.title}</span>}</div>
                <div className="d-flex align-items-center">
                  {todo.completed?<i className="bi bi-check-all fs-4"></i>:<i className="bi bi-check fs-4"></i>}
                <i className="bi bi-trash-fill fs-6"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
}
export default Todos