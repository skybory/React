import { createSearchParams, useSearchParams } from "react-router-dom";

function AddPage() {
    const [queryParams] = useSearchParams();
    const add =queryParams.get('add') ? parseInt(queryParams.get('add')) :1;
    const size =queryParams.get('size') ? parseInt(queryParams.get('size')) :10;     

    const queryStr= createSearchParams({page: add, size: size}).toString

    return (
        <div className="p-4 w-full bg-orange-200 ">
            <div className="text-3xl font-extrabold">
                Todo Add Page Component ==== {add} ===={size} ====
            </div>
        </div>
    );
}
export default AddPage;