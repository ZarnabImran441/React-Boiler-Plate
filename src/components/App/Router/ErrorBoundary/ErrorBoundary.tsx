import {useRouteError} from 'react-router-dom';

import styles from './styles.module.less';

export const ErrorBoundary = () => {
    const error: {message?: string; stack?: string} = useRouteError();

    return (
        <div className={styles.errorWrapper}>
            <p className={styles.errorHeadline}>Something went wrong</p>
            <p className={styles.errorMessage}>{error?.message ?? JSON.stringify(error)}</p>
            {error?.stack && <p className={styles.errorStack}>{error?.stack}</p>}
        </div>
    );
};
