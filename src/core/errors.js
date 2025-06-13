const errorTypes = {
  SERVER: {
    description: 'Server error occurred',
    status: 500,
    code: 'SERVER_ERROR',
  },
  EXTERNAL: {
    description: 'External service error',
    status: 500,
    code: 'EXTERNAL_ERROR',
  },
  DEV_IMPLEMENTATION: {
    description: 'Development implementation error',
    status: 500,
    code: 'DEV_IMPLEMENTATION_ERROR',
  },
  NO_ARGUMENT: {
    description: 'Required arguments not supplied',
    status: 500,
    code: 'NO_ARGUMENT_ERROR',
  },
  ARGUMENT_TYPE: {
    description: 'Wrong argument type',
    status: 500,
    code: 'ARGUMENT_TYPE_ERROR',
  },
  BAD_REQUEST: {
    description: 'Bad request',
    status: 400,
    code: 'BAD_REQUEST_ERROR',
  },
  EMPTY_BODY: {
    description: 'Empty body is not allowed. Please fill the body',
    status: 400,
    code: 'EMPTY_BODY_ERROR',
  },
  VALIDATION: {
    description: 'Invalid request',
    status: 400,
    code: 'VALIDATION_ERROR',
  },
  ALERT: {
    message: 'Operation forbidden by security policy',
    status: 418,
    code: 'ALERT_ERROR',
  }, // hacker tryout case errors
  FORBIDDEN: {
    description: 'Access forbidden',
    status: 403,
    code: 'FORBIDDEN_ERROR',
  },
  NO_ANONYMOUS_ACCESS: {
    description: 'Access denied. No anonymous access',
    status: 403,
    code: 'NO_ANONYMOUS_ACCESS_ERROR',
  },
  BAD_ROLE: {
    description: 'Bad role',
    status: 403,
    code: 'BAD_ROLE_ERROR',
  },
  INVALID_CREDENTIALS: {
    description: 'Invalid credentials',
    status: 403,
    code: 'INVALID_CREDENTIALS_ERROR',
  },
  INVALID_PASSWORD: {
    description: 'Invalid password',
    status: 403,
    code: 'INVALID_PASSWORD_ERROR',
  },
  TOKEN_EXPIRED: {
    description: 'Token expired',
    status: 419,
    code: 'TOKEN_EXPIRED_ERROR',
  },
  SESSION_EXPIRED: {
    description: 'Session (refresh token) expired',
    status: 419,
    code: 'SESSION_EXPIRED_ERROR',
  },
  INVALID_REFRESH_SESSION: {
    description: 'Invalid session. Wrong fingerprint',
    status: 401,
    code: 'INVALID_REFRESH_SESSION_ERROR',
  },
  TOKEN_NOT_SIGNED: {
    description: 'Token not signed',
    status: 500,
    code: 'TOKEN_NOT_SIGNED_ERROR',
  },
  TOKEN_VERIFY: {
    description: 'Token verify error',
    status: 401,
    code: 'TOKEN_VERIFY_ERROR',
  },
  BAD_REFRESH_TOKEN: {
    description: 'Bad Refresh token',
    status: 401,
    code: 'BAD_REFRESH_TOKEN_ERROR',
  },
  WRONG_RESET_PASSWORD_TOKEN: {
    description:
      'Reset password token is not registered. Probably it already used',
    status: 401,
    code: 'WRONG_RESET_PASSWORD_TOKEN_ERROR',
  },
  WRONG_EMAIL_CONFIRM_TOKEN: {
    description:
      'Confirm email token is not registered. Probably it already used',
    status: 401,
    code: 'WRONG_EMAIL_CONFIRM_TOKEN_ERROR',
  },
  PARSE_TOKEN: {
    description: 'Trying get data from access token. Something wrong',
    status: 401,
    code: 'PARSE_TOKEN_ERROR',
  },
  EMAIL_ALREADY_TAKEN: {
    description: 'This email already taken, try use another',
    status: 409,
    code: 'EMAIL_ALREADY_TAKEN_ERROR',
  },
  SEND_EMAIL: {
    description: 'Send email error',
    status: 500,
    code: 'SEND_EMAIL_ERROR',
  },
  DECRYPTION: {
    description: 'Decryption error',
    status: 500,
    code: 'DECRYPTION_ERROR',
  },
  ROUTE_NOT_FOUND: {
    description: 'Route not found',
    status: 404,
    code: 'ROUTE_NOT_FOUND_ERROR',
  },
  NOT_FOUND: {
    description: 'Empty response, not found',
    status: 404,
    code: 'NOT_FOUND_ERROR',
  },
  UNPROCESSABLE_ENTITY: {
    description: 'Unprocessable entity',
    status: 422,
    code: 'UNPROCESSABLE_ENTITY_ERROR',
  },
  DB_DUPLICATE_CONFLICT: {
    description: 'Duplicate conflict. Resource already exists',
    status: 409,
    code: 'DB_DUPLICATE_CONFLICT_ERROR',
  },
  DB_NOTNULL_CONFLICT: {
    description: 'Not null conflict',
    status: 500,
    code: 'DB_NOTNULL_CONFLICT_ERROR',
  },
  DB: {
    description: 'Database error occurred',
    status: 500,
    code: 'DB_ERROR',
  },
};

const errorResponder = (errorType, message = '') => {
  const error = new Error(message);

  if (errorType) {
    error.code = errorType.code || 'UNKNOWN_ERROR';
    error.status = errorType.status || 500;
    error.description = errorType.description || 'Unknown error occurred';
  }

  return error;
};

module.exports = {
  errorTypes,
  errorResponder,
};
