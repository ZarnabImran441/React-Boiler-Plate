/// <reference types="vite/client" />

interface ImportMetaEnv {
    // API URL
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
