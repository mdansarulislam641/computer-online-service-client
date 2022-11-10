import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -online service`;
    },[title])
}

export default useTitle ;