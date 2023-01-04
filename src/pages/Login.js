import React, {useContext} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import {AuthContext} from '../context';

const Login = () => {
    const submit = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={submit}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
