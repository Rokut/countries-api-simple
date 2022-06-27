import React, { useState, useEffect } from 'react'  //istraukinesim duomenys, todel naudosim useState. Kad startuotu aplikacija ir uzkrautu duomenys,
import Countries from './Countries'         //reikia useEffect

const Main = () => {
    const [countries, setCountries] = useState([]); //useState([]) lauztininiai vidui nes pirmas initial state

    const getAllCountries = () => {
        fetch('https://restcountries.com/v3.1/all') //pasiimam visus duomenys
        .then(res => res.json())         //gaunam su pazadu, ir pakuojam i json
        .then(data => setCountries(data)) //ka su duomenim darom. uzsetinam i state

    }
    console.log(countries); //paziuret galima ar pavyke i state uzsetinti. gausim masyva su lauztiniais skliaustais(consoleje pslp), reiskia objektas

    useEffect(()=>{
        getAllCountries();
    }, []) //() nes metodas(hooks). Gali atlikti funkcija ir turi zinoti kada ja atlikti. Kai aplikacija startuoja, turi iskviesti duomenu gavimo fetch funkcija
  return (
    //printins tiek elementu kiek bus country masyve
    //bus apjungiantis elementas
    <div className='allCountries'>
        {
          countries && countries.map((oneCountry, index)=>( //tikrinam jeigu countries true(ateina info), gali map'int
            <Countries key={index} country={oneCountry}/> //sukuriam propsa, kokia info atiduos
            ))  
            
        }
        
    </div>
  )
}

export default Main