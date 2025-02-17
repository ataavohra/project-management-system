export const httpStatusConstant = {
  OK: 200,
  CREATED: 201,
  UPDATED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  REDIRECT: 302,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  ACCESS_FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  UNREGISTERED: 410,
  PAYLOAD_TOO_LARGE: 413,
  CONCURRENT_LIMITED_EXCEEDED: 429,
  CODE_EXPIRED: 498,
  REQUEST_CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SHUTDOWN: 503,
  INVALID_TOKEN: 419,
  SESSION_EXPIRED: 423
}
export const httpErrorMessageConstant = {
  SUCCESSFUL: 'SUCCESSFUL',
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  UNAUTHORIZED_ACCESS: 'UNAUTHORIZED_ACCESS',
  ACCESS_FORBIDDEN: 'ACCESS_FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  METHOD_NOT_ALLOWED: 'METHOD_NOT_ALLOWED',
  UNREGISTERED: 'UNREGISTERED',
  PAYLOAD_TOO_LARGE: 'PAYLOAD_TOO_LARGE',
  CONCURRENT_LIMITED_EXCEEDED: 'CONCURRENT_LIMITED_EXCEEDED',
  CODE_EXPIRED: 'CODE_EXPIRED',
  REQUEST_CONFLICT: 'REQUEST_CONFLICT',
  TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  BAD_GATEWAY: 'BAD_GATEWAY',
  SHUTDOWN: 'SHUTDOWN',
  INVALID_TOKEN: 'INVALID_TOKEN',
  ACCESS_TOKEN_EXPIRED: 'ACCESS_TOKEN_EXPIRED',
  INVALID_EMAIL: 'INVALID_EMAIL',
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  STRIPE_ERROR: 'STRIPE_ERROR',
  TOKEN_BLACKLISTED: 'TOKEN_BLACKLISTED',
  RESPONSE_HANDLER_ERROR: 'RESPONSE_HANDLER_ERROR'
}
