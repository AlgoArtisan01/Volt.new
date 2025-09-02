/*For Local Development & Testing
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

export const IS_PRODUCTION = import.meta.env.PROD;*/

//For Deployment & Production
export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "https://volt-new-backend.vercel.app";

export const API_URL =
  import.meta.env.VITE_BACKEND_URL || 'https://volt-new-backend.vercel.app';

export const IS_PRODUCTION = import.meta.env.PROD;
