
// serverData : server 에서 보내주는 데이터
// movePage : 페이지 이동
function PageComponent({serverData, movePage}) {
    // serverData.prev : 이전 페이지
    // serverData.pageNumList : 페이지 번호
    // serverData.next : 다음 페이지


    return (
        <div className="m-6 flex justify-center">
        {serverData.prev ? 
            <div className="m-2 p-2 w-16 text-center font-bold text-blue-400 "
                onClick={()=>movePage({page : serverData.prevPage})}
            >Prev
            </div> : <></>}

        {serverData.pageNumberList.map(pageNum =>
            <div key={pageNum}
                className={ `m-2 p-2 w-12 text-center rounded shadow-md text-white
                ${serverData.current === pageNum? 'bg-gray-500':'bg-blue-400'}`}
                onClick={() => movePage({page:pageNum})}>
                {pageNum}
            </div>
        )}

            {serverData.next ? 
            <div className="m-2 p-2 w-16 text-center font-bold text-blue-400 "
                onClick={()=>movePage({page:serverData.nextPage})}
            > Next
            </div> : <></>}            
        </div>
    );
}

export default PageComponent;