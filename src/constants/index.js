// api.js
import axios from "axios";

// apiConfig.js
export const getBaseURL = () => {
  return "http://localhost:8000";
};

const URL = `${getBaseURL()}/api/products`;

