import './App.css'
import Header from './components/Header'
import List from './components/List'
import { useState } from 'react';
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




function App() {


  // mockData는 배열의 형태이므로, [] 대신 'mockData' 를 쓸 수 있다.
  const [todos, setTodos] = useState(mockData);

  const onCreate = (content) => {
    const newTodo = {
      id    : 0,
      isDone: false,                  
      content : content,            // content 부문은 파라미터로 넘겨받은 content
      date    : new Date().getTime(),
    }

    // 스프레드 연산자로 기존의 todos 데이터와
    // 완전 동일한 데이터를 넣어주고, 우리가 추가하고 싶은
    // newTodo 데이터도 넣어준다.
    setTodos([newTodo, ...todos]);
  }




  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List/>
    </div>
    
  )
}

export default App
