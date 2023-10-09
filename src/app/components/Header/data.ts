export interface ISelectOptions {
  value: string
  label: string
}

export const optionCategories: Array<ISelectOptions> = [
  { value: "all", label: "All" },
  { value: "art", label: "Art" },
  { value: "biography", label: "Biography" },
  { value: "computers", label: "Computers" },
  { value: "history", label: "History" },
  { value: "medical", label: "Medical" },
  { value: "poetry", label: "Poetry" },
]

export const optionsSort: Array<ISelectOptions> = [
  { value: "relevance", label: "Relevance" },
  { value: "newest", label: "Newest" },
]
