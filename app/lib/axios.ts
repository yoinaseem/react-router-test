import Axios from "axios";

// Helper function to get a cookie by name
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
}

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

// This is the interceptor that solves the problem.
// It runs before every request.
axios.interceptors.request.use(
  (config) => {
    if (typeof document !== 'undefined') {
      const token = getCookie("XSRF-TOKEN");
      let decoded = null;
      if (token !== null) {
          decoded = decodeURIComponent(token);
          if (decoded) {
            config.headers["X-XSRF-TOKEN"] = decoded;
          }
      }
    }

    // console.log(config.headers["X-XSRF-TOKEN"], decoded);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
