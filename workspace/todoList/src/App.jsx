import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';

// 임시 data
const mockData=[
  {
    id      : 0,        // db에서의 pk
    isDone  : false,    // 선택을 위한 체크박스 값
    content : "React 공부하기 ",
    date    : new Date().getTime(), // 현재시각
  },
  {
    id      : 1,        // db에서의 pk
    isDone  : false,    // 선택을 위한 체크박스 값
    content : "Spring Boot 공부하기",
    date    : new Date().getTime(), // 현재시각
  },
  {
    id      : 2,        // db에서의 pk
    isDone  : false,    // 선택을 위한 체크박스 값
    content : "AWS 공부하기",
    date    : new Date().getTime(), // 현재시각
  },
];

function reducer(state, action){
  switch(action.type){
    case 'CREATE' : return [action.data, ...state];
    case 'UPDATE' : 
      return state.map((item) => item.id == action.targetId
        ? {...item, isDone : !item.isDone}
        : item
      );
    case 'DELETE' : 
      return state.filter((item) => item.id != action.targetId);
    default : return state;
  }
}

//export const TodoContext = createContext();

export const TodoStateContext = createContext();
export const TodoDispatcherContext = createContext();

function App() { 
  //const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) =>{
    dispatch({
      type : "CREATE",
      data : {
          id      : idRef.current++,        
          isDone  : false,    
          content : content,
          date    : new Date().getTime(),
        }
    })
  },[]);

  const onUpdate = useCallback((targetId) =>{
    dispatch({
      type      : "UPDATE",
      targetId  : targetId
    });
  },[]);

  // const onUpdate = (targetId) =>{
    // todos state의 값들 중에서 targetId와 일치하는
    // id를 갖는 투두 아이템의 isDone변경

    // todos배열에서 targetId와 일치하는
    // id를 갖는 요소의 isDone데이터만 토글로 바꾼 배열
    // setTodos(todos.map((todo) =>{
    //   // 삼항연산자로 표현
    //   return todo.id == targetId 
    //   ? { ...todo, isDone : !todo.isDone }
    //   : todo

      // if(todo.id == targetId){
      //   return{
      //     ...todo,
      //     isDone : !todo.isDone
      //   }
      // }

      // return todo;
    // }));
  // }

  // const onDelete = (targetId) =>{
  //   // todos 배열에서 targetId와 일치하는 id를 갖는
  //   // 요소만 삭제한 새로운 배열
  //   // 즉, 삭제 대상이 아닌 영역(targetId와 일치하지 않은 대상)만 필터링
  //   setTodos( todos.filter((todo)=> todo.id != targetId ) );
  // }

  //  const onDelete = (targetId) =>{
  //   dispatch({
  //     type      : "DELETE",
  //     targetId  : targetId
  //   });
  //  }

  // 1param : 최적화 하고싶은 대상 함수, 그 함수를 그대로 return
  // 2param : deps, deps가 변경되었을 때만 함수 실행해 준다.
  const onDelete = useCallback((targetId) =>{
    dispatch({
      type      : "DELETE",
      targetId  : targetId
    });
  }, []);


  const memoizedDispatch = useMemo(() =>{
    return {onCreate, onUpdate, onDelete}
  },[]);
  // 빈 배열을 deps로 보내서, 
  // 최초에 렌더링 되는 것 말고는 다시 재생성 되지 않도록 한다.

  return (
    <div className="App">
        <Header/>
        {/* <TodoContext.Provider value={{
          todos, onCreate, onDelete, onUpdate
        }}> */}
        <TodoStateContext.Provider value={todos}>
          <TodoDispatcherContext.Provider value={memoizedDispatch}>
            <Editor/>
            <List />  
          </TodoDispatcherContext.Provider>
        </TodoStateContext.Provider>
        {/* </TodoContext.Provider> */}
    </div>
  )
}

export default App
