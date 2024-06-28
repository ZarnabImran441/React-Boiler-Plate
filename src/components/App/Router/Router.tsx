import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import routes from '@/constants/routes';
import {lazyRetry} from '@/utils/lazyRetry';

import {ErrorBoundary} from './ErrorBoundary';

const Home = lazyRetry(() =>
    import('@/pages/Home').then((module) => ({
        default: module.Home,
    })),
);

// https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Home />,
        errorElement: <ErrorBoundary />,
    },
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};
