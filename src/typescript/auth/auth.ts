import { readFileSync } from "fs";

export namespace Auth {
  const credentialFilePath: string = (import.meta.dirname ?? __dirname) + "/credentials.json";
  export const scopes: string[] = ["https://www.googleapis.com/auth/youtube.readonly"];

  export function getAPIKey(): string {
    const credentialsFile = readFileSync(credentialFilePath, "utf-8");
    const credentials = JSON.parse(credentialsFile);
    return credentials.api_key;
  }
}
