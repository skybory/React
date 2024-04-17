import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Main2 from "./components/Main2"


function App() {
 const ButtonProps = {
  text : "메일",
  color : "red",
  a : 1,
  b : 2,
  c : 3,  // 마지막 comma는 살아있어도 버그가 안남
 }
  return (
    <>
      {/* <Header/>
      <h1>안녕리액트!!!</h1>
      <Main/>
      <Main2/>
      <Footer/> */}

      {/*text = {"메일"} color={"red"} a={1} b={2} c={3}
        ...ButtonProps : 스프레드 연산자
          -> ButtonProps 의 내용을 펼쳐서 나열하라는 뜻
      */}
      <Button {...ButtonProps}/>
      <Button text = {"카페"}/>
      <Button text = {"블로그"}>
        {/* <div>자식요소</div> */}
      <Header/>
      </Button>
    </>
  )
}

export default App
