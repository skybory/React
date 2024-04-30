import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/todo/ListComponent";

function ListPage(){

    // useCustomMove 로 대체 가능
    // // getter, setter 사용 가능
    // const [queryParams] = useSearchParams();
    // //페이징 처리 
    // const page =queryParams.get('page') ? parseInt(queryParams.get('page')) :1;
    // const size =queryParams.get('size') ? parseInt(queryParams.get('size')) :10;     //parseInt() : 문자열을 정수로 변환하되 문자열의 시작 부분부터 숫자를 읽어 변환  

    return(
        <div className="p-4 w-full bg-orange-200 ">
            <div className="text-3xl font-extrabold">
                Todo List Page Component 
            </div>
            <ListComponent />
        </div>
    );
}

export default ListPage;