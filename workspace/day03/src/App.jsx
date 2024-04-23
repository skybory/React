import { useState, useEffect, useRef } from 'react';
import './App.css'
import Controller from './components/Controller'
import HookExample from './components/HookExample'
import Viewer from './components/Viewer'
import Even from './components/Even';



function App() {

  // 초기값을 App.jsx에서 작성해야 함. component 끼리는 데이터 전달이 안되기 때문.  


  const[count, setCount] = useState(0);
  const[input, setInput] = useState("");

  // 파라미터 값을 false 로 넘겨준 경우, 아직 mount되지 않는다
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount');
    // 페이지 랜더링과 동시에 최초로, 한 번만 실행되는걸 확인할 수 있음
  }, []);

  // 2. 업데이트 : 변화, 리랜더링
  // deps 생략 : 콜백함수는 리랜더링 될 때마다 실행된다
  // useEffect(() => {
  //   console.log('update');
  //   // 리랜더링 될 때마다 실행됨
  //   // 2 번째 파라미터(=배열)를 날리면 됨
  // });

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return; // 강제종료, 즉 최초의 1번은 update 실행되지 않음.
    }

    console.log('update');
  })


  // 첫 번째 파라미터 : 콜백함수
  // 두 번째 파라미터 : 배열
  // 배열에 들어가 있는 값이 바뀌면,
  // sideEffect 로 첫 번째 파라미터(=콜백함수)를 실행한다
  // useEffect(() => {
  //   // count : 100
  //   // `` : 백틱(backtick)
  //   console.log(`count : ${count} / ${input}`);   // '/' 는 연산의 기능이 아님. 그대로 출력됨
  // }, [count, input]);




  // Controller 는 count 와 setCount 가 둘 다 필요하다.
  // 각각 넘겨줄 수도 있지만, event 핸들러를 만들어서
  // 그 자체를 넘겨줄 수도 있다.
  const onClickButton = (value) => {
    // value : +10, -100 등 선택한 숫자 값 넘어옴
    setCount(count + value);
  }


  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value = {input} onChange={(e) => {
          setInput(e.target.value);
        }}/>
      </section>

      <section>
       <Viewer count = {count}/>
        {count % 2 == 0 ? < Even/> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton}/>
      </section>

    </div>
  )
}

export default App
