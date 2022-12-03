/// <reference types="vite/client" />

interface ImportMetaEnv {
     readonly SSL: string;
     readonly SSL_CERT: string;
     readonly SSL_KEY: string;
}

interface ImportMeta {
     readonly env: ImportMetaEnv;
}
