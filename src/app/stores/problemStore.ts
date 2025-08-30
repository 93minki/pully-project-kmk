import type { ProblemType } from "@/entities/problems/model/types";
import { create } from "zustand";

type State = {
  problemList: ProblemType[];
  problemIdList: number[];
};

type Action = {
  setProblemList: (problemList: ProblemType[]) => void;
};

export const useProblemStore = create<State & Action>((set) => ({
  problemList: [],
  problemIdList: [],
  setProblemList: (problemList: ProblemType[]) =>
    set({
      problemList,
      problemIdList: problemList.map((problem) => problem.id),
    }),
}));
