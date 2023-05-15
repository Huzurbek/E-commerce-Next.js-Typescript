export type TCatalogList = { id: string; text: string };

export type TCatalog = {
  id: string;
  title: string;
  catalogList: TCatalogList[];
};
