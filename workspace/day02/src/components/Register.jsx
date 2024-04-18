import { useState } from "react";

// 회원가입 폼
// 1. 이름      -> 변수로 만들어서 바꿔야함.
// 2. 생년원일
// 3. 국적
// 4. 자기소개

const Register = () => {

    const[name, setName] = useState("김자바");   
    const[birth, setBirth] = useState("");      
    const[country, setCountry] = useState("");
 
    const onChangeName = (e) => {               // onChangeName function 정의
        setName(e.target.value);
    }              

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry =(e) => {
        setCountry(e.target.value);
        // console.log(country);
    }

    return(
        <div>
            <div>
                <input onChange={onChangeName} value={name} placeholder={"이름"}/> 
                {/* {name} */}
            </div>

            <div>
                {/* 캘린더 생성 */}
                <input type="date" onChange={onChangeBirth} value={birth}/> 
                {birth}
            </div>

            
            <div>
                <select onChange={onChangeCountry} value={country}>
                    <option ></option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
                {country}

            </div>
        
        </div>
    );
}

export default Register;