import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

function MainPage() {
    return (
        <BasicLayout>
            <div className={'text-3xl'}>
                    Mainpage 
                {/* <div className="flex">
                    <Link to={'/about'}>About</Link>
                </div> */}
            </div>
        </BasicLayout>
    );
}

export default MainPage;