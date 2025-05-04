import * as React from 'react';
import {createBrowserRouter, Navigate, RouteObject,} from 'react-router-dom';
import App from '../App';
import {Abibas} from '../components/pages/Abibas';
import {Adidas} from '../components/pages/Adidas';
import {Error404} from '../components/pages/Error404';
import {Login} from '../components/pages/Login';
import {Model} from '../components/pages/Model';
import {Prices} from '../components/pages/Prices';
import {ProtectedPage} from '../components/pages/ProtectedPage';
import {Puma} from '../components/pages/Puma';
import {ProtectedRoute} from './ProtectedRoute';

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    ERROR: '/error',
    PROTECTED: '/protected',
    LOGIN: '/login',
    HOME: '/'
} as const

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas/>
    },
    {
        path: PATH.PUMA,
        element: <Puma/>
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>
    },
    {
        path: PATH.PRICES,
        element: <Prices/>
    },
    {
        path: PATH.MODEL,
        element: <Model/>
    },
    {
        path: PATH.ERROR,
        element: <Error404/>
    },
    {
        path: PATH.LOGIN,
        element: <Login/>
    },
    {
        path: PATH.HOME,
        element: <Adidas/>
    },
]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED,
        element:
            <ProtectedRoute>
                <ProtectedPage/>
            </ProtectedRoute>
    },
]

export const PrivateRoute = () => {
    const isAuth = true
    return <>{isAuth ? <ProtectedPage/> : <Navigate to={'/login'}/>}</>
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            ...publicRoutes,
            {
                element: <PrivateRoute/>,
                children: privateRoutes
            }
        ]
    },

]);


//-------------------------

//const PATH = {
//     ADIDAS: '/adidas',
//     PUMA: '/puma',
//     ABIBAS: '/abibas',
//     PRICES: '/prices',
//     MODEL: '/:model/:id',
//     ERROR: '/error',
//     PROTECTED: '/protected',
//     LOGIN: '/login'
// } as const
//
// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App/>,
//         errorElement: <Navigate to={'/error'}/>,
//         children: [
//             {
//                 path: PATH.ADIDAS,
//                 element: <Adidas/>
//             },
//             {
//                 path: PATH.PUMA,
//                 element: <Puma/>
//             },
//             {
//                 path: PATH.ABIBAS,
//                 element: <Abibas/>
//             },
//             {
//                 path: PATH.PRICES,
//                 element: <Prices/>
//             },
//             {
//                 path: PATH.MODEL,
//                 element: <Model/>
//             },
//             {
//                 path: PATH.PROTECTED,
//                 element:
//                 <ProtectedRoute>
//                     <ProtectedPage/>
//                 </ProtectedRoute>
//             },
//             {
//                 path: PATH.ERROR,
//                 element: <Error404/>
//             },
//             {
//                 path: PATH.LOGIN,
//                 element: <Login/>
//             },
//         ]
//     },
//
// ]);