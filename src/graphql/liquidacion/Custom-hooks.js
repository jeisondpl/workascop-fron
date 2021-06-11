import React from 'react'
import { useQuery } from 'react-apollo'
import { ALL_BASE_LIQUIDACION } from './graphql-queries'

export const useAllLiquidacion = () => {
  const result = useQuery(ALL_BASE_LIQUIDACION)
  return result
}
