/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_CARD_TO: string | undefined;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
