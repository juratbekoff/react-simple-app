import {
    Carusel,
    Featured,
} from "../components";

import { New, CategoryList } from "./index";

const HomeView = () => {
    return (
        <>
            <Carusel />
            <Featured />
            <CategoryList />
            <New />
            {/* <TopSold /> */}
        </>
    );
};

export default HomeView;
