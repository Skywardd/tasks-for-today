import React, {useRef} from "react";
import "./styles.css";

//setting types of Props
interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
};

const InputField=({todo, setTodo, handleAdd}:Props)=>{
 const inputRef=useRef<HTMLInputElement>(null);
    return (
      <form data-testid ="render-input"  className="input" onSubmit={(e)=>{
            handleAdd(e)

            //remove blur after submmiting 
            inputRef.current?.blur();

        }}>
        <input  
        ref={inputRef}
            type='input' 
            placeholder = "task" 
            className="input__box"
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
            ></input>
        <button className = "input__submit">Go</button>
      </form>
    )
};

export default InputField;