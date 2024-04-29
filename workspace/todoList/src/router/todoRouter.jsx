import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import ReadPage from "../pages/todo/ReadPage";

const Loading = <div className={'bg-purple-500'}>Loading</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const todoRouter = () =>{
    return [
        {
            path    : 'list',   // todo/list
            element:<Suspense fallback={Loading}><TodoList/></Suspense>,
        },
        {
            path    : '',   // todo/ 요청이오면 todo/list로 redirection
            element:<Navigate replace={true} to={'list'}></Navigate>,
        },
        {
            path    : 'read/:tno',   // todo/read/30
            element:<Suspense fallback={Loading}><ReadPage/></Suspense>,
        },
        {
            path    : 'add',   // todo/add
            element:<Suspense fallback={Loading}><TodoAdd/></Suspense>,
        },
        {
            path    : 'modify/:tno',   // todo/modify/13
            element:<Suspense fallback={Loading}><TodoModify/></Suspense>,
        },
    ]
};

export default todoRouter;
