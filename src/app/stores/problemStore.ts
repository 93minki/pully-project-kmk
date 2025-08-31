import type { ProblemType } from "@/entities/problems/model/types";
import { create } from "zustand";

type State = {
  problemList: ProblemType[];
  problemIdList: number[];
  isLoading: boolean;
};

type Action = {
  setProblemList: (problemList: ProblemType[]) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const useProblemStore = create<State & Action>((set) => ({
  problemList: [],
  problemIdList: [],
  isLoading: false,
  setProblemList: (problemList: ProblemType[]) =>
    set({
      problemList,
      problemIdList: problemList.map((problem) => problem.id),
    }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
