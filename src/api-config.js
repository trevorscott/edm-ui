// let backendHost;

// const hostname = window && window.location && window.location.hostname;

// if(hostname === 'dfe-dashboard.herokuapp.com') {
//   backendHost = 'https://dfe-dashboard.herokuapp.com';
// } else {
//   backendHost = ;
// }

export const API_ROOT = process.env.REACT_APP_EDM_RELAY_BACKEND_HOST || 'http://localhost:5000';