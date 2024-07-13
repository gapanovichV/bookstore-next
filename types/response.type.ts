export interface StatusResponse {
  status: Status
  message?: string
  user_token?: {
    accessToken: string
    refreshToken: string
  }
}

export enum Status {
  Success = "success",
  Error = "error"
}
