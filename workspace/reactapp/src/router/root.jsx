import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";
//import MainPage from "../pages/MainPage";

const Loading = <div className={'bg-purple-200'}>Loading</div>;                            //로딩페이징 구성
const Main = lazy(()=> import("../pages/MainPage"));         //lazy() :게으르게 가지고 있다가 필요할대 줌 
const About = lazy(()=> import("../pages/About")); 
const TodoIndex = lazy(()=> import("../pages/todo/IndexPage")); 
const TodoList = lazy(()=> import("../pages/todo/ListPage")); 
const root= createBrowserRouter([
    {
        path : '',
        element : <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path : 'about',
        element : <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path    : 'todo',
        element : <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    },


]);

export default root;