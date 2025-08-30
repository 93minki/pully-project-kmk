import type { ProblemType } from "@/entities";
import { create } from "zustand";

type State = {
  similarProblemList: ProblemType[];
};

type Action = {
  setSimilarProblemList: (similarProblemList: ProblemType[]) => void;
};

export const useSimilarProblemStore = create<State & Action>((set) => ({
  similarProblemList: [],
  setSimilarProblemList: (similarProblemList: ProblemType[]) =>
    set({ similarProblemList }),
}));
