import { API_URL } from "@/shared/utils/constants";

export const getProblemList = async () => {
  try {
    const response = await fetch(`${API_URL}/problems`);
    if (!response.ok) {
      throw new Error(
        `Problem Fetch Error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`문제 목록 가져오기 실패: ${error.message}`);
    }
    throw new Error("문제 목록 가져오기 실패");
  }
};

export const getSimilarProblemList = async (
  problemId: number,
  excludedProblemIds: number[] = []
) => {
  try {
    const response = await fetch(
      `${API_URL}/problems/${problemId}/similarity?excludedProblemIds=${excludedProblemIds.join(
        ","
      )}`
    );
    if (!response.ok) {
      throw new Error(
        `Similar Problem Fetch Error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`유사 문제 목록 가져오기 실패: ${error.message}`);
    }
    throw new Error("유사 문제 목록 가져오기 실패");
  }
};
