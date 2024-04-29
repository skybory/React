import { useSearchParams } from "react-router-dom";

function ListPage(){
    // getter, setter 사용 가능
    const [queryParams] = useSearchParams();
    // 페이징 처리
    const page 
    = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size 
    = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

    return(
        <div className="p-4 w-full bg-orange-200 ">
            <div className="text-3xl font-extrabold">
                Todo List Page Component ==== {page} ==== {size} =====
            </div>
        </div>
    );
}

export default ListPage;