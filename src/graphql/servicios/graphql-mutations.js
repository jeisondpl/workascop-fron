import { gql } from 'apollo-boost'
//crear
export const CREATE_SERVICIOS = gql`
  mutation createServicio($nombre: String!, $descripcion: String!, $url: String!) {
    createServicio(nombre: $nombre, descripcion: $descripcion, url: $url) {
      servicios {
        id
        nombre
      }
    }
  }
`

//update
export const UPDATE_SERVICIOS = gql`
  mutation UpdateServicio($id: ID!, $nombre: String!, $descripcion: String!, $url: String!) {
    updateServicio(Id: $id, nombre: $nombre, descripcion: $descripcion, url: $url) {
      servicios {
        id
        nombre
      }
    }
  }
`
