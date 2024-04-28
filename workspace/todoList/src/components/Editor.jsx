import { useState, useRef, useContext } from "react";
import "./Editor.css";
import { TodoDispatcherContext } from "../App";

const Editor = () =>{
    // 구조분해 할당으로 {onCreate}만 받아온다.
    const {onCreate} = useContext(TodoDispatcherContext);       

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }
    const onSubmit = () =>{
        if( content == "" ){
            contentRef.current.focus();
            // alert("할일을 입력해 주세요!");
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e) =>{
        if(e.keyCode == 13){    // enter
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input 
                ref={contentRef} 
                value={content} 
                onChange={onChangeContent} 
                onKeyDown={onKeyDown}
                placeholder="새로운 todolist..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}
export default Editor;