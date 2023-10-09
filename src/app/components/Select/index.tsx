import React from "react"
import { Select } from "antd"
import { ISelectOptions } from "../Header/data"
import { useAppDispatch } from "../../hooks"
import cn from "./styles.module.css"

interface ISelect {
  options: ISelectOptions[]
  setValue: React.Dispatch<React.SetStateAction<string>>
  setQuery?: React.Dispatch<React.SetStateAction<string>>
  name: string
}

const SelectField: React.FC<ISelect> = ({
  options,
  setValue,
  name,
  setQuery,
}) => {
  const dispatch = useAppDispatch()
  const handleChange = (value: string) => {
    if (value) {
      dispatch(setValue(value))
      if (setQuery) {
        dispatch(setQuery(""))
      }
    }
  }

  return (
    <div className={cn.wrapper}>
      <label htmlFor={name} className={cn.label}>
        {name}
      </label>
      <Select
        defaultValue={options[0].label}
        style={{ width: 120 }}
        name={name}
        className={cn.select}
        id={name}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default SelectField
