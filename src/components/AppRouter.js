import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router';
import {AuthContext} from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader />
    }

    return (
        <>
            {
                isAuth
                    ? <Routes>
                        {privateRoutes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
                        <Route path="/*" element={<Navigate to="/posts" replace/>}/>
                    </Routes>
                    : <Routes>
                        {publicRoutes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
                        <Route path="/*" element={<Navigate to="/login" replace/>}/>
                    </Routes>
            }
        </>
    );
};

export default AppRouter;
