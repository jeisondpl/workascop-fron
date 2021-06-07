import React from 'react'
import { useQuery, useLazyQuery } from 'react-apollo'
import { gql } from 'apollo-boost'


//servicios
export const FIND_SERVICIOS = gql`
  {
    query createServiciobyName($descripcion:String!,$nombre:String!,$url:String!){
      createServicio(descripcion:$descripcion,nombre:$nombre,url:$url)
      servicios{
          id
          nombre
        }
      }
  }
`

const FindServicios = () => {
    const [getServicios, result] = useLazyQuery(FIND_SERVICIOS)

    return (
        <div>
            
        </div>
    )
}


export default FindServicios
