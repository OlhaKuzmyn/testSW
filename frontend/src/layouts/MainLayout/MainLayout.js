import React from 'react';
import {Outlet} from "react-router-dom";
import css from "./MainLayout.module.css"
import {Header} from "../../app_components";

const MainLayout = () => {
    return (
        <div className={css.container}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
};