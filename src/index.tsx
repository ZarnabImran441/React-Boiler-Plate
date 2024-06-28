import 'react-toastify/dist/ReactToastify.css';

import {createRoot} from 'react-dom/client';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';

import {App} from '@/components/App';

import '@/styles/global.less';

const myCache = createCache({key: 'cache'});
myCache.compat = true;

const rootElement = document.getElementById('root') || new DocumentFragment();

createRoot(rootElement).render(
    <CacheProvider value={myCache}>
        <App />
    </CacheProvider>,
);
