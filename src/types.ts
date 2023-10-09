export enum OrderBy {
  RELEVANCE = "relevance",
  NEWEST = "newest",
}

export interface IBookData {
  id: string
  selfLink: string
  volumeInfo: {
    imageLinks: {
      thumbnail: string
    }
    title: string
    authors: Array<string>
    categories?: Array<string>
  }
}

export interface IBook {
  id: string
  image: string
  title: string
  authors: Array<string>
  categories: Array<string>
}

export interface IBookWithDescription extends IBook {
  description: string
}
export type IData = IBook[]

export type StatusLoading = "idle" | "loading" | "fulfilled" | "failed"
