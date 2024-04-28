import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div className={'bg-purple-500'}>Loading</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));

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
    ]
};

export default todoRouter;
