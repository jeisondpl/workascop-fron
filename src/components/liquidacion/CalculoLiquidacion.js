import React, { useState } from 'react'

export const CalculoLiquidacion = ({ sueldo, data }) => {
  const [validacionIT, setValidacionIT] = useState(0)
  const [salud, setSalud] = useState(0)
  const [pencion, setPencion] = useState(0)
  const [porcArl, setPorcArl] = useState(0)
  const [caja, setCaja] = useState(0)
  const [sena, setSena] = useState(0)
  const [icbf, setIcbf] = useState(0)

  // console.log(data)
  return { validacionIT, salud, pencion, porcArl, caja, sena, icbf }
}
