import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();
export const API_ROOT = env.REACT_APP_EDM_RELAY_BACKEND_HOST || 'http://localhost:5000';