import './App.css'
import Header from './components/Header'
import List from './components/List'
import { useState, useRef, useReducer } from 'react';
import Editor from './components/Editor';

  // 임시 data
  const mockData= [
    {
      id    : 0,                       // db에서 pk값
      isDone: false,                   // 선택을 위한 checkbox 값
      content : "react공부하기",        // 내용
      date    : new Date().getTime(),  // 현재 시각
    },
    {
      id    : 1,                       // db에서 pk값
      isDone: false,                   // 선택을 위한 checkbox 값
      content : "spring boot 공부하기",        // 내용
      date    : new Date().getTime(),  // 현재 시각
    },
    {
      id    : 2,                       // db에서 pk값
      isDone: false,                   // 선택을 위한 checkbox 값
      content : "자격증 시험 공부하기",        // 내용
      date    : new Date().getTime(),  // 현재 시각
    },
  ];


  function reducer(state, action) {
    // CREATE 처리 진행
    // 15분까지
    switch (action.type) {
      case "CREATE" : return [action.data, ...state];
      case "UPDATE" :  
        return state.map((item) => item.id == action.targetId
        ? { ...item, isDone : !item.isDone}
        : item 
      );
      case "DELETE" : 
        return (state.filter((item) => item.id != action.targetId ))
      default : return state;
    }
  }

 
function App() {


  // mockData는 배열의 형태이므로, [] 대신 'mockData' 를 쓸 수 있다.
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  
  const onCreate = (content) => {
    
    dispatch({
      type : "CREATE",
      data : {
        id    : idRef.current++,
        isDone: false,                  
        content : content,            // content 부문은 파라미터로 넘겨받은 content
        date    : new Date().getTime(),
      }
    })

    // 스프레드 연산자로 기존의 todos 데이터와
    // 완전 동일한 데이터를 넣어주고, 우리가 추가하고 싶은
    // newTodo 데이터도 넣어준다.
    // setTodos([newTodo, ...todos]);
  }


  const onUpdate = (targetId) => {
    dispatch({
      type : "UPDATE",
      targetId : targetId
    })
  }

  const onDelete = (targetId) => {
    dispatch( {
      type : "DELETE",
      targetId : targetId
    })
  }


  // const onUpdate = (targetId) => {
    // todos state의 값들 중에서 targetId와 일치하는
    // id를 갖는 todo 아이템의 isDone 변경

    // todos 배열에서 targetId와 일치하는
    // id를 갖는 요소의 isDone 데이터만 토글로 바꾼 배열

    //   setTodos(todos.map((todo) => {
    //   // 삼항연산자로 표현하기
    // return todo.id == targetId
    //   ? { ...todo, isDone : !todo.isDone}
    //   : todo

      // if (todo.id == targetId) {
      //   return{
      //     ...todo,
      //     isDone : !todo.isDone
      //   }
      // }

      // return todo;
    
  // ));
// }


  // const onDelete = (targetId) => {
  //   dispatch( {

  //   })
    // todos 배열에서 targetId와 일치하는 id를 갖는
    // 요소만 삭제한 새로운 배열
    // 즉, 삭제 대상이 아닌 영역(targetId와 일치하지 않는 대상)만 필터링

    // setTodos(todos.filter((todo) => todo.id != targetId ));
  // }
  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
    
  )
}

export default App
