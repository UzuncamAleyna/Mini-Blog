import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../Components/Global/Header/Header';
import ROUTES from '../../Consts/Routes';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import NotFound from '../NotFound/NotFound';
import style from './Authentication.module.css';

const Authentication = () => {
    return (
        <div className={style.container}>
            <Header/>
            {/* De header wordt boven de Routes geplaatst omdat deze altijd moet worden gerenderd */}
            <Routes>
                    <Route path={ROUTES.home} element={<Home/>}/>
                    <Route path={ROUTES.detail.path} element={<Detail/>}/>
                    <Route path={ROUTES.notFound} element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default Authentication;
