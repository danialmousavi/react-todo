import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
const DeleteTodo=({todoId})=>{
    const [loading,setLoading]=useState(false)
    const { deleteTodo } = useContext(TodoContext);
    const handleDelete= async()=>{
        setLoading(true)
       await deleteTodo(todoId)
    }

    return(
        <>
                <i onClick={()=>handleDelete()} className="bi bi-trash-fill fs-6"></i>
                {loading && <div className="spinner-border spinner-border-sm"></div>}
        </>

    )
}
export default DeleteTodo