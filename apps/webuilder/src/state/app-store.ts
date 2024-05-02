import { create } from "zustand";
import { TabType } from "../types";

export type AppStoreType = {
  tab: TabType;
  setTab: (tab: TabType) => void;
};

export const useAppStore = create<AppStoreType>((set) => ({
  tab: TabType.Content,
  setTab: (tab: TabType) => set({ tab }),
}));
