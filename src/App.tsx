import React from 'react';
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from './components/pages/_styles'
import styles from './components/Site.module.css';


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    PAGE5: '/protected',
} as const

function App() {
    const navigate = useNavigate()
const navigateHandler = () => {
        navigate(-1)
}

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Prices</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE5}>ProtectedPage</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <Link className={styles.LinkLikeButton} to={'/adidas'}>
                             Главная страница (Adidas)
                        </Link>
                        <Link to={'..'} onClick={navigateHandler} className={styles.LinkLikeButton}>
                            Назад
                        </Link>
                    </div>

                    {/*// onClick={(e: MouseEvent<HTMLAnchorElement>) => {*/}
                    {/*//               e.preventDefault()*/}
                    {/*//               navigate(-1)*/}
                    {/*//             }}*/}
                    {/*//             to={'..'}*/}

                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PAGE4} element={<Prices/>}/>*/}

                    {/*    /!*<Route path={'/adidas/:id'} element={<Model/>}/>*!/*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}

                    {/*    <Route path={'/*'} element={<Error404/>}/>*/}

                    {/*    /!*<Route path={'/page/error'} element={<Error404/>}/>*!/*/}
                    {/*    /!*<Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>*!/*/}
                    {/*</Routes>*/}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



