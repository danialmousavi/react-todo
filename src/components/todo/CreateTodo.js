import { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext";

const CreateTodo=()=>{
    const { addTodo } = useContext(TodoContext);
    const [title,setTitle]=useState('');
    const [loading,setLoading]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(title){
            setLoading(true);
           await addTodo(title);
           setLoading(false)
        }
        
    }
return(
<>
<h2>create todo:</h2>
<form action="" onSubmit={(e)=>handleSubmit(e)} className="row mt-2">
        <div className="col-md-6">
            <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" placeholder="todo title"/>
            <div className="form-text text-danger">
                {title?'':'Title is reqierd'}
            </div>
        </div>
        <div className="col-auto">
            <button className="btn btn-dark">
                create 
                {loading && <div className="spinner-border spinner-border-sm ms-2"></div>} 
            </button>
        </div>
    </form>
</>
)
}
export default CreateTodo