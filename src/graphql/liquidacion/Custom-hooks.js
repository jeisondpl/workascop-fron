import React from 'react'
import { useQuery, useLazyQuery } from 'react-apollo'
import { ALL_BASE_LIQUIDACION, FIND_CALIFICACION, FIND_LIQUIDACION } from './graphql-queries'

export const useAllLiquidacion = () => {
  const result = useQuery(ALL_BASE_LIQUIDACION)
  return result
}

export const useFindCalificacion = () => {
  const result = useLazyQuery(FIND_CALIFICACION)
  return result
}

export const useFindLiquidacion = () => {
  const result = useLazyQuery(FIND_LIQUIDACION)
  return result
}
