export interface AuthenticationResult {
  result: "success" | "error";
  error?: string;
  userId?: string;
}
