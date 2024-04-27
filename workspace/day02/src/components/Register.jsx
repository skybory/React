import { useState, useRef } from "react";
// import { useRef } from "react";

// 회원가입 폼
// 1. 이름      -> 변수로 만들어서 바꿔야함.
// 2. 생년원일
// 3. 국적
// 4. 자기소개
// let count = 0;   여기 선언하는것은 매우 나쁨.
const Register = () => {

    // const[name, setName] = useState("김자바");   
    // const[birth, setBirth] = useState("");      
    // const[country, setCountry] = useState("");
    // const[bio, setBio] = useState("");
    
    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : ""
    });
    
    const onSubmit = () => {
        if (input.name == "" ) {
            // DOM 요소에 접근하기 위해서는 useRef 객체 사용
            console.log(inputRef.current);
            inputRef.current.focus();
        }
    }


    // const refObj = useRef(12345);
    // console.log("register 컴포넌트 실행!!!");

    const refCount = useRef(1);
    const inputRef = useRef();

    // key 값은 가져올때 [] 를 반드시 씌워야함
    // let count = 0;
    const onChange = (e) => {
        console.log(e.target.value, e.target.name);
        setInput({
            ...input,
            [e.target.name] : e.target.value
         })
         console.log(refCount.current++);
    }

    // console.log(input);

    // const onChangeName = (e) => {
    //     setInput({
    //         ...input,
    //         name : e.target.value
    //     })
    // }

    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input,
    //         birth : e.target.value
    //     })
    // }
    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input,
    //         country : e.target.value
    //     })
    // }
    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input,
    //         bio : e.target.value
    //     })
    // }


    // const onChangeName = (e) => {               // onChangeName function 정의
    //     setName(e.target.value);
    // }              

    // const onChangeBirth = (e) => {
    //     setBirth(e.target.value);
    // }

    // const onChangeCountry =(e) => {
    //     setCountry(e.target.value);
    //     // console.log(country);
    // }
    
    // const onChangeBio = (e) => {
    //     setBio(e.target.value);
    // }


    // 회원가입에 변경이 일어날때마다
    // 1씩 증가하는 값을 console.log 로 출력
    return(
        <div>
            {/* <button
            onClick={ ()=>{
                refObj.current++;
                console.log(refObj.current);
            }
            }>ref + 1</button> */}

            <div>
                <input ref={inputRef} onChange={onChange} name="name" value={input.name} placeholder={"이름"}/> 
                {/* {name} */}
            </div>

            <div>
                {/* 캘린더 생성 */}
                <input type="date" onChange={onChange} name="birth" value={input.birth}/> 
            </div>

            
            <div>
                <select onChange={onChange} name="country" value={input.country}>
                    <option ></option>
                    <option value="KR">한국</option>
                    <option value="US">미국</option>
                    <option value="UK">영국</option>
                </select>
            </div>

            <div>
                <textarea value={input.bio} name="bio" onChange={onChange}></textarea>
             
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
}

export default Register;