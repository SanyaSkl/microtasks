import React from 'react';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {S} from "./components/pages/_styles"
import {Error404} from "./components/pages/Error404";
import {PageOne} from "./components/pages/PageOne";
import {PageThree} from "./components/pages/PageThree";
import {PageTwo} from "./components/pages/PageTwo";
import styles from "./components/Site.module.css";

const PATH = {
    PAGE0: '/',
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/*'
} as const

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>

                    <S.NavWrapper><NavLink to={PATH.PAGE0}>Home</NavLink></S.NavWrapper>

                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>

                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>

                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>

                </S.Nav>
                <S.Content className={styles.content}>
                    <Routes>
                        <Route path={PATH.PAGE0} element={<Navigate to={'/adidas'}/>}/>

                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={PATH.PAGE4} element={<Error404/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer className={styles.footer}>abibas 2023</S.Footer>
        </div>
    );
}

export default App;

