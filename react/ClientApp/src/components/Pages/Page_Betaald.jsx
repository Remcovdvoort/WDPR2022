﻿import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../BezoekersPortaalHeader";
import ShowOrder from "../ShowOrder";

function Page_Betaald() {
    

    


    return (
        <>
            <ResponsiveAppBar />
            <div className="flex-container-horizontal">
                
                
                <div className="flex-container-vertical">
                    <h1>Bedankt voor uw bestelling.</h1>
                    <p>De tickets worden binnen de komende minuten naar uw email adres gestuurd.<br /> U heeft betaald: </p>
                    <button id="button">Exporteer naar iCal</button>
                </div>
            </div>
        </>
    )
}

export default Page_Betaald;