export const Config = {
  apiKey: import.meta.env.VITE_API_KEY,
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheet: {
    name: "eventSubscriptions",
    id: "1YJM8O7pyAsv9Y8J8I5EGFoYR-6t8UKIeV7Gzf8tnx0Y",
    sheets: {
      default: "main",
    },
  },
  scope: "https://www.googleapis.com/auth/spreadsheets",
};
