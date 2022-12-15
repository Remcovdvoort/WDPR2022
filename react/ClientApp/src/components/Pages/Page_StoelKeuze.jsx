﻿import React, { useState }  from 'react';
import ShowOrder from "../ShowOrder";
import Header from "../Header";
import SeatButton from "../SeatButton";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PopUp from "../PopUp";

function Page_StoelKeuze(){

    {/*deze gegevens moeten gefetched worden*/}
    let row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let row2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let row3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    let rows =[row1, row2, row3]

    const [selectedSeats, setSeat] = useState([]);
    
    const toggleSeat = (seatNumber) => {
        
        {/*dit checkt of het nummer van de stoel al geselecteerd is
        als dit niet zo is wordt de stoel toegevoegd aan de lijst*/}
        if (!selectedSeats.includes(seatNumber)) {
            setSeat(oldArray => [...oldArray, seatNumber])
        }
        else{
            {/*als dit wel zo is wordt de stoel uit de lijst gehaald*/}
            setSeat(selectedSeats.filter(item => item!== seatNumber));
        }
    }

    
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMessage, setpopUpMessage] = useState(false);
    
   
    const onNextButtonClick = () => {
        if (selectedSeats.length < 1){
            setpopUpMessage("Kies minstens 1 stoel om een bestelling te plaatsen.")
            setShowPopUp(true)
            
        }
        else if (selectedSeats.length > 25)
        {
            setpopUpMessage("Het is niet toegestaan om meer dan 25 stoelen te kiezen.")
            setShowPopUp(true)
        }
        else
        {
            //next page
        }
    }
    
    
    return(
        <>
            <Header/>
            {showPopUp && (<PopUp message={popUpMessage} onClose={() => setShowPopUp(false)}/>)}
            
            <div className="flex-container-vertical" style={{margin:"5%"}}>

                <h1 style={{marginBottom:"2%"}}>Kies uw stoel(en) om een bestelling te plaatsen.</h1>
                
                {/*seatbuttons worden per row aangemaakt ze krijgen mee:
                 seatnumber = nummer van de stoel
                 toggleseat = een methode om de stoel in/uit de lijst selectedSeats te zetten
                  ishighlighted = een boolean om de kleur van de stoel te bepalen*/}
                <div>
                    <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((seatNumber, cellIndex) => (
                                <td key={cellIndex}>
                                    <SeatButton 
                                        seatNumber={seatNumber}
                                        toggleSeat={toggleSeat}
                                        isHighlighted={selectedSeats.includes(seatNumber)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </div>
                
                <div>podiumfoto</div>

                <div className="flex-container-horizontal" style={{width:"100%", height:"100%"}}>
                    <div>
                        <ShowOrder toggleSeat={toggleSeat} seats={selectedSeats}/>
                    </div>
                    <div>
                        <button
                            style={{
                                width:"100px", 
                                height:"50px"}}
                            onClick={() => onNextButtonClick()}>
                            Verder
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Page_StoelKeuze;