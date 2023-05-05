import SHEETS from "./sheets";

const sheetAPI = {
  apiKey: import.meta.env.VITE_API_KEY, // sheetAPI project
  // sheetAPI project
  auth: {
    username: import.meta.env.VITE_USER,
    password: import.meta.env.VITE_PWD,
  },
};

const template = {
  uriGet: "https://sheets.googleapis.com/v4/spreadsheets/{{spreadsheetId}}/values/{{range}}",
};

export const getUri = (range: string) => {
  const uri = template.uriGet.replace("{{spreadsheetId}}", SHEETS.eventSubscriptions.id);
  return `${uri.replace("{{range}}", range)}?key=${sheetAPI.apiKey}`;
};

export const getAuth = () => {
  return sheetAPI.auth;
};
export const getApiKey = () => {
  return sheetAPI.apiKey;
};
