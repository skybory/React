import { useState } from "react";

// state 값을 props로 전달하기
const Bulb = () => {
    const [light, setLight] = useState("OFF");
    console.log(light);
    return (
      <div>
        {light == "ON" ? 
          (<h1 style={{backgroundColor:"orange"}}>ON</h1>)  // true 일 때 실행(ON일 때)
          :
          (<h1 style={{backgroundColor:"gray"}}>OFF</h1>)   // false일 때 실행(OFF일 때)
        }
  
  <button                   // 버튼 생성
          onClick={()=>{
            setLight(light == "ON" ? "OFF" : "ON");   // "ON"에 대한 3항연산자
          }}
          >{light == "ON" ? "OFF" : "ON"}</button>
      </div>
    );  
  }

  export default Bulb;