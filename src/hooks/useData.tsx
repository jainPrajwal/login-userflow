import { useContext } from "react"
import { DataContext } from "../contexts/data-context"

export const useData = () => {
    return useContext(DataContext)
}
