import React from "react"
import ButtonBack from "../../components/ButtonBack"
import cn from "./styles.module.css"

const NotFoundPage = () => {
  return (
    <div className={cn.wrapper}>
      <h1 className={cn.title}>Page not found!!!(((</h1>
      <ButtonBack />
    </div>
  )
}

export default NotFoundPage
