import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";


const getNum = (param, defaultValue) => {
    if(!param) {
        return defaultValue;
    }
    return parseInt(param);
}

const useCustomMove = () => {
    // 페이지 이동할 때 필요한 page&size 정의
    const navigate = useNavigate();

    const [queryParams] = useSearchParams();

    // moveToList 가 호출이 되면 true -> false, false -> true
    const [refresh, setRefresh] = useState(false);


    const page = getNum(queryParams.get('page'), 1);
    const size = getNum(queryParams.get('size'), 10);
    const queryDefault
    = createSearchParams({page, size}).toString();

    const moveToList = (pageParam) => {
        let queryStr = "";
        if(pageParam) { // 사용자가 넘겨준 page 와 size 가 있다면
            const pageNum = getNum(pageParam.page, 1);
            const sizeNum = getNum(pageParam.size, 10);
            queryStr 
            = createSearchParams({page:pageNum, size:sizeNum}).toString();

        } else {        // page 와 size 가 없다면
            queryStr = queryDefault;
        }
        
        setRefresh(!refresh);
        navigate({pathname:`../list`, search:queryStr});
    }

    // 수정 페이지 이동
    const moveToModify = (num) => {
        navigate({
            pathname : `../modify/${num}`,
            search:queryDefault
        });
    }


    const moveToRead = (num) => {
        navigate({
            pathname : `../read/${num}`,
            search:queryDefault
        });
    }


    // 객체로 여러개를 return할 예정이라, 객체로 작업
    return {moveToList, moveToModify, moveToRead, page, size, refresh};

}



export default useCustomMove