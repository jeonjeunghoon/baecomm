export const http = {
  get: async <Response>(endpoint: string): Promise<Response> => {
    const response = await fetch(endpoint);

    if (!response.ok) throw new Error("데이터 가져오기 실패");

    return await response.json();
  },
};
