



// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// invalid hook call
// const state = useState();

import useInput from "../hooks/useInput";


const HookExam= () => {

    // const state = useState();


    // 조건문, 반복문에서는 호출 불가능
    // if (true) {
    //     const state = use State();
    // }

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (

        <div> <input value={input} onChange={onChange}/> </div>
    
    );
}

export default HookExam;