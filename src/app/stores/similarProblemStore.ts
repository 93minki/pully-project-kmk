import type { ProblemType } from "@/entities";
import { create } from "zustand";

type State = {
  similarProblemList: ProblemType[];
  isLoading: boolean;
};

type Action = {
  setSimilarProblemList: (similarProblemList: ProblemType[]) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const useSimilarProblemStore = create<State & Action>((set) => ({
  similarProblemList: [],
  isLoading: false,
  setSimilarProblemList: (similarProblemList: ProblemType[]) =>
    set({ similarProblemList }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
