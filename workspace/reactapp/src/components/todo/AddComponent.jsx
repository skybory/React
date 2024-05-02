import { useState } from "react";
import ResultModal from "../common/ResultModal";
import { postAdd } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    title : "",
    writer : "",
    content : "",
    dueDate : ""
}

function AddComponent() {
    const [todo, setTodo] = useState({...initState});
 

    // 결과값 상태로 보관
    const [result, setResult] = useState(null);


    // 페이지 List 이동
    const {moveToList} = useCustomMove();

    const handleChangeTodo = (e) => {
        // todo[title], todo[writer], ...
        todo[e.target.name] = e.target.value;
        setTodo({...todo})
    }

    const handleClickAdd = () => {
        // console.log(todo);
        postAdd(todo).then(result => {
            // console.log(result);
            setResult(result.TNO);
            // 기존 입력 input 데이터를 다 날림
            setTodo({...initState});
        });
    }

    // 모달 창 닫기
    const closeModal = () => {
        setResult(null);
        moveToList();
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="title" type={'text'} 
                        value={todo.title}
                        onChange={handleChangeTodo} >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="writer" type={'text'}
                        value={todo.writer}
                        onChange={handleChangeTodo} ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">CONTENT</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="content" type={'text'}
                        value={todo.content}
                        onChange={handleChangeTodo} ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="dueDate" type={'date'}
                        value={todo.dueDate}
                        onChange={handleChangeTodo} ></input>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <button type="button"
                        onClick={handleClickAdd}
                        className="rounded p-4 w-36 bg-blue-500 text-xl text-white" > ADD </button>
                </div>
            </div>
            {/* { result 가 존재할때만 모달 띄움 -> 이 부분이 에러가 발생. db에 입력은 된다 } */}
            {result ? 
            <ResultModal
                title={'Add Result'}
                content={`New ${result} Added`}
                callbackFn={closeModal}
                /> 
            : <></>}
        </div>     
    );
}

export default AddComponent;