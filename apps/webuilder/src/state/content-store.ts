import { create } from "zustand";
import { Page } from "../types";
import { useShallow } from "zustand/react/shallow";

export type ContentStoreType = {
  pages: Page[];
  addPage: (page: Page) => void;
  renamePage: (id: string, name: string) => void;
  removePage: (id: string) => void;
  selectedPageId?: string;
  setSelectedPageId: (id: string) => void;
  expandedPages: string[];
  togglePage: (id: string) => void;
  selectedLayerId?: string;
  setSelectedLayerId: (id: string) => void;
  expandedLayers: string[];
  toggleLayer: (id: string) => void;
};

export const useContentStore = create<ContentStoreType>((set) => ({
  pages: [],
  addPage: (page: Page) =>
    set((state) => ({
      pages: [...state.pages, page],
      selectedPageId: page.id,
    })),
  renamePage: (id: string, name: string) =>
    set((state) => ({
      pages: state.pages.map((page) =>
        page.id === id ? { ...page, name } : page,
      ),
    })),
  removePage: (id: string) =>
    set((state) => ({
      pages: state.pages.filter((page) => page.id !== id),
      selectedPageId:
        state.selectedPageId === id ? undefined : state.selectedPageId,
    })),
  selectedPageId: undefined,
  setSelectedPageId: (id: string) =>
    set({ selectedPageId: id, selectedLayerId: undefined }),
  expandedPages: [],
  togglePage: (id: string) =>
    set((state) => ({
      expandedPages: state.expandedPages.includes(id)
        ? state.expandedPages.filter((pageId) => pageId !== id)
        : [...state.expandedPages, id],
    })),
  selectedLayerId: undefined,
  setSelectedLayerId: (id: string) => set({ selectedLayerId: id }),
  expandedLayers: [],
  toggleLayer: (id: string) =>
    set((state) => ({
      expandedLayers: state.expandedLayers.includes(id)
        ? state.expandedLayers.filter((layerId) => layerId !== id)
        : [...state.expandedLayers, id],
    })),
}));

export const useLayersStore = () => {
  return useContentStore(
    useShallow((state) => {
      const selectedPage = state.pages.find(
        (page) => page.id === state.selectedPageId,
      );

      return {
        page: selectedPage,
        layers: selectedPage?.layers ?? [],
        selectedLayerId: state.selectedLayerId,
        setSelectedLayerId: state.setSelectedLayerId,
        expandedLayers: state.expandedLayers,
        toggleLayer: state.toggleLayer,
      };
    }),
  );
};
