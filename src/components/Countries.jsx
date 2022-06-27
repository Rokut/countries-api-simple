import React from 'react'

const Countries = (props) => {      //
  return (
    //stilizuosim viena sali
    //nurodom kelia propsui i salies pavadinimo stalciuka
    //nurodom kelia propsui i veliavos stalciuka
    <div className='oneCountry'>
        <p>{props.country.name.common}</p>
        <img src={props.country.flags.png} alt={props.country.name.common} />
    </div> //norim kad korteleje butu pavadinimas ir nuotrauka flag
  )
}

export default Countries