const CreateTodo=()=>{
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
return(
<>
<h2>create todo:</h2>
<form action="" onSubmit={(e)=>handleSubmit(e)} className="row mt-2">
        <div className="col-md-6">
            <input type="text" className="form-control" placeholder="todo title"/>
            <div className="form-text text-danger">
                Title is reqierd
            </div>
        </div>
        <div className="col-auto">
            <button className="btn btn-dark">create</button>
        </div>
    </form>
</>
)
}
export default CreateTodo