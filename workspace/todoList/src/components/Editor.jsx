import { useState, useRef} from "react";
import "./Editor.css"



const Editor = ({onCreate}) => {


    // 문제1. input에 아무것도 입력하지 않았을 때, 버튼을 눌러도 입력X, foucs하도록.
    // 문제2. 데이터가 입력 후 입력 폼 지우기
    // 문제3. 추가버튼 클릭하지 않고, 엔터 이벤트 넣기


    // input 박스에 onChange 이벤트를 주고,
    // 이벤트가 발생할 때 마다 입력된 content 값을
    // useState 훅 값을 가지고 있는 처리.

    // function useContent() {
    //     const [content, setContent] = useState();     // 빈 값을 기본값으로 세팅.
    //     const onChange = (e) => {
    //         setContent(e.target.value);
    //     }

    //     return [content, onChange];
    // }

    const contentRef = useRef();
    const [content, setContent] = useState("");     // 빈 값을 기본값으로 세팅.
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    

    const onSubmit = () => {

        if (content == "") {
            alert("할 일을 입력해주세요!") 
            contentRef.current.focus();
         
        } else {
        onCreate(content);
        setContent("");
        }
    }
 
    const onKeyDown = (e) => {
        if(e.keyCode == 13) {       // 엔터
            onSubmit();
        }
    }


    return (
        <div className="Editor">
            <input 
                ref={contentRef}  
                value = {content} 
                placeholder="새로운 todoList..."  
                onChange={onChangeContent}
                onKeyDown={onKeyDown}/>
            <button onClick={onSubmit} >추가</button>
            
        </div>
    );
}
export default Editor;