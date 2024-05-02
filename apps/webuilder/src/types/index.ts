/**
 * Represents a page in the app.
 */
export type Page = {
  id: string;
  title: string;
  path: string;
  children?: Page[];
  layers: PageLayer[];
};

export type PageLayer = {
  id: string;
  name: string;
  children?: PageLayer[];
};

/**
 * Represents a tab in the app.
 */
export enum TabType {
  Content = "layers",
  Components = "components",
}
