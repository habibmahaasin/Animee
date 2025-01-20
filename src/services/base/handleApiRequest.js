import apiClient from "@/utils/axiosConfig";

/**
 * Makes an API request using a specified HTTP method, endpoint, and optional data and headers.
 *
 * @param {'get'|'post'|'put'|'delete'|'patch'} method - The HTTP method to use for the request.
 * @param {string} endpoint - The API endpoint (relative to the base URL defined in api.js).
 * @param {Object} [data=null] - The request body data, used for methods like POST or PUT (optional).
 * @param {Object} [headers={}] - Additional headers to include in the request (optional).
 * @returns {Promise<any>} The response data returned from the API.
 * @throws {Error} If the request fails, it throws an error with the relevant message.
 *
 * @example
 * // Example usage for a GET request:
 * handleApiRequest('get', '/user/profile')
 */

export const handleApiRequest = async (
  method,
  endpoint,
  data = {},
  headers = {}
) => {
  try {
    const response = await apiClient({
      method,
      url: endpoint,
      data,
      headers,
    });
    return response;
  } catch (error) {
    console.error(
      `Error with ${method.toUpperCase()} request to ${endpoint}:`,
      error
    );
    throw error;
  }
};
