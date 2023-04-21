export {};

declare global {
  interface Window {
    setIndexPageData: () => void;
    indexPageData: any
  }
}