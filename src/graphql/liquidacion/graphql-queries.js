import { gql } from 'apollo-boost'

//todos
export const ALL_BASE_LIQUIDACION = gql`
  {
    arls {
      id
      porcArl1
      porcArl2
      porcArl3
      porcArl4
      porcArl5
      descripcion
      fecha
      __typename
    }
    arlLast {
      id
      porcArl1
      porcArl2
      porcArl3
      porcArl4
      porcArl5
      descripcion
      fecha
      __typename
    }
    ibls {
      id
      uvt
      smmlv
      smmlvHora
      auxTransporte
      descripcion
      fecha
      __typename
    }
    iblsLast {
      id
      uvt
      smmlv
      smmlvHora
      auxTransporte
      descripcion
      fecha
      __typename
    }
    parafiscales {
      id
      porcCajaComp
      porcSena
      porcIcbf
      descripcion
      fecha
      __typename
    }
    parafiscalesLast {
      id
      porcCajaComp
      porcSena
      porcIcbf
      descripcion
      fecha
      __typename
    }
    prestacion {
      id
      porcCesantia
      porcIntCesantia
      porcPrima
      porcVacaciones
      descripcion
      fecha
      __typename
    }
    prestacionLast {
      id
      porcCesantia
      porcIntCesantia
      porcPrima
      porcVacaciones
      descripcion
      fecha
      __typename
    }
    pisoSeguridadSocial {
      id
      porcPisoMinimo
      rangoInferiorPisoMin
      rangoSuperiorPisoMin
      descripcion
      fecha
      __typename
    }
    pisoSeguridadSocialLast {
      id
      porcPisoMinimo
      rangoInferiorPisoMin
      rangoSuperiorPisoMin
      descripcion
      fecha
      __typename
    }

    retencionFuente {
      id
      porcRetefuente
      descripcion
      fecha
      __typename
    }
    retencionFuenteLast {
      id
      porcRetefuente
      descripcion
      fecha
      __typename
    }
    seguridadSocials {
      id
      rol
      porcSalud
      porcPension
      descripcion
      fecha
      __typename
    }
    seguridadSocialsLastCliente {
      id
      rol
      porcSalud
      porcPension
      descripcion
      fecha
      __typename
    }
    seguridadSocialsLastColaborador {
      id
      rol
      porcSalud
      porcPension
      descripcion
      fecha
      __typename
    }
    recargos {
      createdAt
      updatedAt
      id
      factorNocturno
      factorFestivo
      factorDominical
      jornadaInicial
      jornadaFinal
      fecha
      __typename
    }
    recargosLast {
      createdAt
      updatedAt
      id
      factorNocturno
      factorFestivo
      factorDominical
      jornadaInicial
      jornadaFinal
      fecha
      __typename
    }
  }
`
export const FIND_CALIFICACION = gql`
  query findCalificaciones($Idcolaborador: String!) {
    findCalificaciones(Idcolaborador: $Idcolaborador) {
      id
      solicitudAsignada {
        colaborador {
          identificacion
          cliente {
            nombre
          }
        }
        valor
        solicitud {
          subservicio {
            nombre
            claseRiesgo
          }
        }
      }
    }
  }
`
export const FIND_LIQUIDACION = gql`
  query findLiquidacion($Idcolaborador: String!) {
    findColaboradorSmall(Idcolaborador: $Idcolaborador) {
      identificacion
      nombre
      totalSalud
      totalpension
      totalArl
      subTotal
      totalServicios
    }
    liquidacion(Idcolaborador: $Idcolaborador) {
      num
      total
      niveRiesgo
      porcRiesgo
      calculoRiesgo
      calculoRiesgo
      porcSalud
      calculoSalud
      porcPension
      calculoPension
      subTotal
      servicio
    }
  }
`
