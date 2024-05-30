export interface StatusResponse {
  status: Status
  message: string
  user_token?: {
    accessToken: string
    refreshToken: string
  }
}

export enum Status {
  SuccessOK = 200,
  ClientErrorUnauthorized = 401,
  ClientErrorBadRequest = 400
}
