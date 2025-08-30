import { create } from "zustand";

type State = {
  selectedProblemId: number;
};

type Action = {
  setSelectedProblemId: (problemId: number) => void;
};

export const useSelectProblemStore = create<State & Action>((set) => ({
  selectedProblemId: 0,
  setSelectedProblemId: (selectedProblemId: number) =>
    set({ selectedProblemId }),
}));
