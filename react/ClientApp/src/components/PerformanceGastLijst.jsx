﻿import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function PerformanceGastLijst(props) {
    const [visitors, setVisitors] = useState([]);

    // Fetch visitors by performance
    const fetchVisitorsByPerformance = async (performanceId) => {
        try {
            const response = await fetch(`http://localhost:5001/api/Performance/visitorslist/${performanceId}`);
            const visitors = await response.json();
            console.log(visitors)
            return visitors;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const visitors = await fetchVisitorsByPerformance(props.performanceId);
            setVisitors(visitors);
        };
        fetchData();
    }, []);

    const handleDownload = () => {
        // Code to generate the PDF document and download it
        const pdf = new jsPDF();
        pdf.text('Bezoekers Lijst', 10, 10);
        pdf.autoTable({
            head: [['Name', 'Email']],
            body: visitors.map(visitor => [visitor.name, visitor.email]),
        });
        pdf.save("GastLijst.pdf");
    }


    return(
        <li key={props.performanceId} style={{margin:"15px",padding: "5px", outline:"2px solid darkblue"}}>
            {props.performanceStartTime} - {props.performanceEndTime} {props.performanceShowName} in {props.performanceRoomNumber}
            <br></br>
            <button onClick={handleDownload}>Download gastlijst</button>
        </li>
    )
}
export default PerformanceGastLijst;
