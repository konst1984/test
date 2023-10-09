import { IData } from "../types"

export const sortData = (data: IData, value: string): IData => {
  if (value === "all") {
    return data
  }

  return data.filter((item) =>
    item.categories
      .map((cat) => cat.toLowerCase())
      .includes(value.toLowerCase()),
  )
}
