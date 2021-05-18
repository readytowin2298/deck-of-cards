import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';


function Table(){
    const API_BASE_URL = "http://deckofcardsapi.com/api/deck";

    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [autoDraw, setAutoDraw] = useState(false);

    useEffect(() => {
        async function getCardData(){
            const resp = await axios.get(`${API_BASE_URL}/new/shuffle/`);
            setDeck(resp.data);
        }  
        getCardData() 
    }, [setDeck])

    async function drawNewCard(){
        let { deck_id } = deck;
        try {
            let drawnCard = await axios.get(`${API_BASE_URL}/${deck_id}/draw/`);

            if (drawRes.data.remaining === 0) {
                throw new Error("no cards remaining!");
              }
              
        } catch (err) {
            alert(err)
        };
    }
}