import { useReducer } from "react";

// 파라미터 값을 두개 받아옴.
// param1 : 현재 state 값
// param2 : 액션 객체(dispatch)
function reducer( state, action ) {
    // console.log(state, action);
    // if(action.type == "INCREASE") {
        
    //     return state + action.data;
    // }
    // if(action.type == "DECREASE") {
        
    //     return state - action.data;
    // }
   
    switch (action.type) {
        case "INCREASE" : return state + action.data;
        case "DECREASE" : return state - action.data;
        default : return state;
    }
}


const Example = () => {
/*
    useReducer는 useState 와 동일하게
    새로운 state를 생성해서 배열의 첫 번째 요소로 return한다.
    dispatch 라는 상태 변화를 요청하기만 하는 요소를 반환해준다.
    즉, 컴포넌트 내부에서 dispatch 함수를 호출하면
    상태변화가 요청이 되고,
    useReducer 가 상태변화를 처리할 함수를 호출하게 된다.
    그 함수는 직접 만들어야 한다.
    - 두 번째 인수는 state의 초기값이다. 
*/

    const[state, dispatch] = useReducer(reducer, 0);

    // 버튼이 클릭되었을 때 dispatch 상태 함수를 호출해서, state 의 상태 변화를 요청.
    const onClickPlus = () => {
        // dispatch 를 호출해서 상태 변화를 요청.
        // 인수 : 상태가 어떻게 변화되길 원하는지 객체로 전달
        // 객체 내부 데이터는 내가 작성 -> 액션 객체라고 한다.
        dispatch({
            type : "INCREASE",
            data : 1
        });
    }

    const onClickMinus = () => {
        dispatch({
            type : "DECREASE",
            data : 1
        });
    }
    return (
        <div>
            Example
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
}

export default Example;