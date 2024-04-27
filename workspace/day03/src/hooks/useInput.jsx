import { useState } from 'react'
// component가 아니기 때문에 첫 글자가 대문자가 아님

// 접두사를 use로 바꾸기만 해도, 리액트에서 커스텀 hook 으로 이해함
function useInput (){       // 나는 use를 지우고도 해보고싶음
    const [input, setInput] = useState();
    const onChange = (e) => {
        setInput(e.target.value);
    }
    return [input, onChange];
    // 배열로 input, onChange 를 return 
}


export default useInput;