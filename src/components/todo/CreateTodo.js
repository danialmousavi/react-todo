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
        document.getElementById('inp1').value=''
    }
return(
<>
<h2>create todo:</h2>
<form action="" onSubmit={(e)=>handleSubmit(e)} className="row mt-2">
        <div className="col-md-6">
            <input id="inp1" onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" placeholder="Todo Title"/>
            <div className="form-text text-danger">
                {title?'':'Title is reqierd'}
            </div>
        </div>
        <div className="col-auto">
            <button className="btn btn-dark">
                CREATE 
                {loading && <div className="spinner-border spinner-border-sm ms-2"></div>} 
            </button>
        </div>
    </form>
</>
)
}
export default CreateTodo