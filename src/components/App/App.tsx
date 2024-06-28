import {ToastContainer} from 'react-toastify';

import {Router} from './Router';

export const App = () => {
    return (
        <>
            <Router />
            <ToastContainer
                toastClassName="toastClassName"
                bodyClassName="bodyClassName"
                position="bottom-right"
                autoClose={6000}
                hideProgressBar
                newestOnTop
                closeOnClick
                pauseOnHover
                rtl={false}
                draggable={false}
                closeButton={false}
            />
        </>
    );
};
