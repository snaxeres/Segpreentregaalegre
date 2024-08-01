import { useEffect, useState } from "react"
import data from "../data/data.json"
import { useParams } from "react-router-dom"

export const useCardList = () => {

  const [loading, setLoading] = useState(true)
  const [seeds, setSeeds] = useState([])
  const { categoryId } = useParams()


  useEffect(() => {
    const myPromise = new Promise((res, rej) =>
      setTimeout(() => res(data), 2000))

    myPromise
      .then((response) => {
        if (!categoryId) {
          setSeeds(response)
        }else {
          const itemsFilter = response.filter(i => i.category === categoryId)
          setSeeds(itemsFilter)        
        }
        
      })
      .finally(() => setLoading(false))

  }, [categoryId])

  return { loading, seeds }
}