import React, { useEffect, useState, useMemo } from 'react'
// 导入axios
import axios from 'axios'

export default function Cinema() {

  const [inputValue, setinputValue] = useState('')
  const [cinemaList, setcinemaList] = useState([])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5386265',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1646991785902793535684609","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      setcinemaList(res.data.data.cinemas)
    }, [])
  })

  const getCinemaList = useMemo(() => {

    const newValue = inputValue.toUpperCase()
    return cinemaList
      .filter(
        ({ name, address }) => name.toUpperCase().includes(newValue) || address.toUpperCase().includes(newValue)
      )

  }, [cinemaList,inputValue])

  return (
    <div>
      <input
        type="text"
        onChange={(evt) => setinputValue(evt.target.value)}
        value={inputValue}
      ></input>
      {
        getCinemaList.map((item) =>
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        )
      }
    </div>
  )
}