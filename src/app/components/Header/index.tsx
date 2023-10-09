import React from "react"
import SearchField from "../SearchField"
import SelectField from "../Select"
import { optionCategories, optionsSort } from "./data"
import {
  setOrder,
  setQuery,
  setSortBy,
} from "../../../features/books/booksSlice"
import cn from "./styles.module.css"

const Header: React.FC = () => {
  return (
    <div className={cn.header}>
      <div className={cn.wrapper}>
        <h1 className={cn.title}>Search of books</h1>
        <SearchField />
        <div className={cn.header__selects}>
          <SelectField
            options={optionCategories}
            setValue={setSortBy}
            name={"Categories"}
          />
          <SelectField
            options={optionsSort}
            setValue={setOrder}
            setQuery={setQuery}
            name={"Sorting by"}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
