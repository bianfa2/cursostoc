const prod = {
  API_URL: "",
};

const dev = {
  API_URL: "",
};

export const api = process.env.NODE_ENV === "development" ? dev : prod;
