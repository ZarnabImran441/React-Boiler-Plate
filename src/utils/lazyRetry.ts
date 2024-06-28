import {lazy} from 'react';
import {toast} from 'react-toastify';

const lazyRetry: typeof lazy = (componentImport) =>
    lazy(async () => {
        try {
            return await componentImport();
        } catch (error) {
            toast.warning('Application has been updated, please reload the browser');
            throw error;
        }
    });

export {lazyRetry};
