import { useEffect, useState } from "react";
import { Config } from "../config";

// import { GoogleSpreadsheet } from "google-spreadsheet";
declare global {
  interface Window {
    gapi: any;
  }
}

interface IOnLoad {
  (values: string[][], error: string): void;
}

export function useSheetRead(spreadsheetId: string, range: string) {
  const [values, setValues] = useState<string[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const initClient = () => {
      window.gapi.client
        .init({
          apiKey: Config.apiKey,
          discoveryDocs: Config.discoveryDocs,
        })
        .then(() => {
          loadValues(onLoad);
        });
    };
    const loadValues = (callback: IOnLoad) => {
      window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
          .get({
            spreadsheetId: Config.spreadsheet.id,
            range: Config.spreadsheet.sheets.default,
          })
          .then((res: any) => {
            console.log(res);
            callback(res.result.values, "");
            setLoading(false);
          })
          .catch((err: any) => {
            console.log(err);
            callback([], err.message);
            setLoading(false);
          });
      });
    };

    const onLoad = (values: string[][], error: string): void => {
      if (values) {
        setValues(values);
        setHeaders(values[0]);
        setRows(values.slice(1));
      } else {
        setError(error);
      }
    };

    setLoading(true);
    window.gapi.load("client", initClient);
  }, [spreadsheetId, range]);

  return { values, headers, rows, error, isLoading };
}
