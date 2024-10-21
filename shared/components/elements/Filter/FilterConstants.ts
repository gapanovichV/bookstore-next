export enum searchParamsName {
  CATEGORY = "category"
}

export enum CategoriesEnum {
  COMPUTERS = "Computers",
  MEN = "MEN",
  TEST = "TEST"
}

export interface FilterByCategoriesProps {
  name: string
  value: CategoriesEnum
}

export const filterByCategories: FilterByCategoriesProps[] = [
  { name: "Computers", value: CategoriesEnum.COMPUTERS },
  { name: "MEN", value: CategoriesEnum.MEN },
  { name: "TEST", value: CategoriesEnum.TEST }
]
