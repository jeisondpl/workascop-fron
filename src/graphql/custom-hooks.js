import React from 'react'
import { useQuery, useLazyQuery, useMutation } from 'react-apollo'
import { ALL_SERVICIOS } from '../graphql/servicios/graphql-queries'
import { FIND_SERVICIOS } from '../graphql/servicios/graphql-queries'
import { CREATE_SERVICIOS, UPDATE_SERVICIOS } from '../graphql/servicios/graphql-mutations'

export const useServicio = () => {
  const result = useQuery(ALL_SERVICIOS)
  return result
}

export const useFindServicio = () => {
  const result = useLazyQuery(FIND_SERVICIOS)
  return result
}

export const useAddServicio = ({ notifyError }) => {
  const result = useMutation(CREATE_SERVICIOS, {
    refetchQueries: [{ query: ALL_SERVICIOS }],
    onError: (error) => notifyError(error.graphQLErrors[0].message),
  })
  return result
}

export const useEditServicio = () => {
  const result = useMutation(UPDATE_SERVICIOS)
  return result
}


// , {
//   refetchQueries: [{ query: ALL_SERVICIOS }],
//   onError: (error) => notifyError(error.graphQLErrors[0].message),
// }