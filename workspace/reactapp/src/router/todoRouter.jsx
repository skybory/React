import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import ReadPage from "../pages/todo/ReadPage";
import ModifyPage from "../pages/todo/ModifyPage";

const Loding = <div className={'bg-purple-200'}>Loding</div>;                            //로딩페이징 구성
const TodoList = lazy(()=> import("../pages/todo/ListPage")); 
const TodoAdd = lazy(()=> import("../pages/todo/AddPage")); 
const TodoModify = lazy(()=> import("../pages/todo/ModifyPage")); 

const todoRouter=()=>{
    return [
        {
            path : 'list',  //todo/list
            element :<Suspense fallback={Loding}><TodoList /></Suspense>,
        },
        {
            path : '',  //todo/ 요청이 오면 todo/list로 redirection
            element : <Navigate replace={true} to={'list'} > </Navigate>
        },
        {
            path : 'read/:tno',  //todo/read/30                                              중복X : PK ,중복O : 파라미터 
            element :<Suspense fallback={Loding}><ReadPage /></Suspense>,
        },
        {
            path : 'add',  // todo/add                                          
            element :<Suspense fallback={Loding}><TodoAdd /></Suspense>,
        },
        {
            path : 'modify/:tno',  //todo/modify/13                                      
            element :<Suspense fallback={Loding}><TodoModify /></Suspense>,
        },
    ]
};

export default todoRouter;