const Main = () => {
    const number = 11;
    const obj = {a:1}

    return (
        <>
            <h1>main</h1>
            <h2>{number % 2 == 0 ? "짝수" : "홀수"}</h2>
            {10}
            {number}
            {[1,2,3]}
            <hr/>
            {true}
            {undefined}
            {null}
            {obj.a}
        </>
    );
}
export default Main;