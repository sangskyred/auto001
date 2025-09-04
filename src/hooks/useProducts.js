
import React, { useEffect, useState } from "react";

function useProduct() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  async function getProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products')
      if (!response.ok) throw new Error("Failed to fetch product")
      const result = await response.json()
      setProduct(result)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  return { product, loading, error }
}

export default useProduct;