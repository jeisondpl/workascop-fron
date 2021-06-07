import { gql } from 'apollo-boost'
//todos
export const ALL_SERVICIOS = gql`
  {
    servicios {
      id
      nombre
      descripcion
      url
    }
  }
`

//por id
export const FIND_SERVICIOS = gql`
  query createServiciobyName($id: Int!) {
    servicioById(id: $id) {
      id
      nombre
      descripcion
    }
  }
`
