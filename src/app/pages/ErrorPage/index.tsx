import React from "react"
import { AxiosError } from "axios"
import ButtonBack from "../../components/ButtonBack"
import { useLocation } from "react-router"
import cn from "./styles.module.css"

interface IErrorPage {
  error: AxiosError | Error
}

const ErrorPage: React.FC<IErrorPage> = (props) => {
  const { pathname } = useLocation()
  const { error } = props

  return (
    <div className={cn.wrapper}>
      <div className={cn.content}>
        <h1 className={cn.title}>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
      {pathname !== "/" && <ButtonBack />}
    </div>
  )
}

export default ErrorPage
