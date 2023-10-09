import axios from "axios"
import { BASE_API_URL } from "../constants/constants"

export const fetchBook = async (id) => {
  try {
    const response = await axios.get(BASE_API_URL + "/" + id)
    return response.data
  } catch (err) {
    throw new Error("Fetch error")
  }
}
