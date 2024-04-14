export const http = {
  get: async <Response>(endpoint: string): Promise<Response> => {
    const response = await fetch(endpoint);

    return await response.json();
  },
};
