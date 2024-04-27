import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

function List({todos, onUpdate, onDelete}){
    const [search, setSearch] = useState("");
    const onChageSearch =(e)=>{
        setSearch(e.target.value);
    }
    function getFilterdData(){
        if( search == ""){
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase()                                           //toLowerCase() :대문자 소문자로
                        .replace(/\s/g,'')                                       //replace() :제거
                        .includes(search.toLowerCase().replace(/\s/g,''))        //includes()문자 비교
        );
    }
    
    // 리렌더링 될때마다 호출
    const filteredTodos = getFilterdData();
    console.log(filteredTodos);


    // todo들의 상태 분석해서 수치로 제공하는 함수를 하나 만들어 보자
    const {totalCount, doneCount, notDoneCount} = useMemo( () => {

        // 기억되어야 할 대상 연산
        console.log("getAnalyzedData 호출!!!!");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount};
    }, [todos]);

    // 첫 번째로 전달한 콜백함수를 2번째로 전달한 deps를 기준으로 메모이제이션(기억)한다
    // 지금처럼 deps에 아무것도 전달하지 않았을 때,
    // 컴포넌트가 최초에 랜더링 되었을 때 한 번만 실행이된다.


    // const getAnalyzedData = () => {
    //     console.log("getAnalyzedData 호출!!!!");
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo) => todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;
    //     return {totalCount, doneCount, notDoneCount};
    // }

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return(
        <div className='List'>
            <h4>Todo List 🌱</h4>
            <div>
                <div>total : {totalCount} </div>
                <div>done : {doneCount} </div>
                <div>notdone : {notDoneCount} </div>
            </div>


            <input 
                value={search}
                onChange={onChageSearch}
                placeholder="검색어를 입력하세요"/>
            <div>
                {filteredTodos.map((todo)=>{
                    return <TodoItem 
                                key={todo.id} {...todo}
                                onUpdate={onUpdate}
                                onDelete={onDelete}/>
                })}
            </div>
        </div>
    );
}
export default List;
