type StatusCode =
  | `${number}`
  // 1xx Informational - Request received, continuing process
  | "100" // Continue
  | "101" // Switching Protocols
  | "102" // Processing
  // 2xx Success - The action was successfully received, understood, and accepted
  | "200" // OK
  | "201" // Created
  | "202" // Accepted
  | "203" // Non-authoritative Information
  | "204" // No Content
  | "205" // Reset Content
  | "206" // Partial Content
  | "207" // Multi-Status
  | "208" // Already Reported
  // 3xx Redirection - Further action must be taken in order to complete the request
  | "300" // Multiple Choices
  | "301" // Moved Permanently
  | "302" // Moved Temporarily
  | "303" // See Other
  | "304" // Not Modified
  | "305" // Use Proxy
  | "307" // Temporary Redirect
  | "308" // Permanent Redirect
  // 4xx Client Error - The request contains bad syntax or cannot be fulfilled
  | "400" // Bad Request
  | "401" // Unauthorized
  | "402" // Payment Required
  | "403" // Forbidden
  | "404" // Not Found
  | "405" // Method Not Allowed
  | "406" // Not Acceptable
  | "407" // Proxy Authentication Required
  | "408" // Request Timeout
  | "409" // Conflict
  | "410" // Gone
  | "411" // Length Required
  | "412" // Precondition Failed
  | "413" // Payload Too Large
  | "414" // URI Too Long
  | "415" // Unsupported Media Type
  | "416" // Range Not Satisfiable
  | "417" // Expectation Failed
  | "418" // I'm a teapot
  | "421" // Misdirected Request
  | "422" // Unprocessable Entity
  | "423" // Locked
  | "424" // Failed Dependency
  | "425" // Unordered Collection
  | "426" // Upgrade Required
  | "428" // Precondition Required
  | "429" // Too Many Requests
  | "431" // Request Header Fields Too Large
  | "451" // Unavailable For Legal Reasons
  // 5xx Server Error - The server failed to fulfill an apparently valid request
  | "500" // Internal Server Error
  | "501" // Not Implemented
  | "502" // Bad Gateway
  | "503" // Service Unavailable
  | "504" // Gateway Timeout
  | "505" // HTTP Version Not Supported
  | "507" // Insufficient Storage
  | "511"; // Network Authentication Required

/**
 * The above type defines a generic response object with a response code, message, and data.
 * @property response - The `response` property is an object that contains information about the
 * response status. It has two properties:
 * @property {T} data - The `data` property is a generic type `T` that represents the actual data being
 * returned by the API response. It could be any type of data such as an object, an array, or a
 * primitive value. The type of `T` will be determined by the specific API endpoint being called
 */

export type BaseResponse<T> = {
  response: {
    response_code: StatusCode;
    response_message: string;
  };
  data: T;
};
