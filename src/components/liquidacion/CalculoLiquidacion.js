import React, { useState } from 'react'

export const CalculoLiquidacion = ({ total, data }) => {
  // const [validacionIT, setValidacionIT] = useState(0)
  // const [salud, setSalud] = useState(0)
  // const [pencion, setPencion] = useState(0)
  // const [porcArl, setPorcArl] = useState(0)
  // const [caja, setCaja] = useState(0)
  // const [sena, setSena] = useState(0)
  // const [icbf, setIcbf] = useState(0)

  console.log(data.iblsLast[0])
  // console.log('Liquidando ', total)
  // setValidacionIT(total)
  // return { validacionIT, salud, pencion, porcArl, caja, sena, icbf }

  const { auxTransporte, uvt, smmlv, smmlvHora } = data.iblsLast[0]
  const valor_hora = smmlv / 30 / 8

  console.log('auxilio T:', smmlv)

  const acumulado = total
  return { acumulado, valor_hora }
}
