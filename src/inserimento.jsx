import React, { useState } from 'react';
import QRCode from "react-qr-code";
import "./inserimento.css";
import Axios from 'axios';

export default function Inserimento(){

    const [stringa, setStringa] = useState([{
    }]);

    const [show, setShow] = useState(0);

    const HandleClick = ()=>{

        let nomeBene = document.getElementById("nomeBene").value;
        let data = document.getElementById("data").value;
        let luogo = document.getElementById("luogo_intervento").value;
        let nomeSchedatore = document.getElementById("schedatore").value;
        let nomeResp = document.getElementById("nome_resp").value;
        let tipoOpera = document.getElementById("tipo_opera").value;
        let descrizione = document.getElementById("descrizione").value;
        let materiale = document.getElementById("materiale").value;
        let altezza = document.getElementById("altezza").value;
        let larghezza = document.getElementById("larghezza").value;
        let profondità = document.getElementById("profondità").value;
        let note = document.getElementById("note").value;

        setStringa(nomeBene);
        setShow(1)
        
        Axios.post('https://protezione-civile-server.onrender.com/aggiungiBene', {nomeBene: nomeBene, data: data, luogo: luogo, nomeSchedatore: nomeSchedatore, nomeResp: nomeResp, tipoOpera: tipoOpera, descrizione: descrizione, materiale: materiale, altezza: altezza, larghezza: larghezza, profondità: profondità, note: note})
          .catch(function (error) {
            console.log(error);
          });

    }

    return(    
        <div className='body'>

            <div className="title">SCHEDATURA BENE</div>

            <div className="inputs">

                <input id="nomeBene" type='text' placeholder='nome bene'></input>
                <input id="data" type='date' placeholder='data'></input>
                <input id="luogo_intervento" placeholder='luogo'></input>
                <input id="schedatore" placeholder='schedatore'></input>
                <input id="nome_resp" placeholder='nome_resp'></input>
                <input id="tipo_opera" placeholder='tipo opera'></input>
                <input id="descrizione" placeholder='descrizione'></input>
                <input id="materiale" placeholder='materiale'></input>
                <input id="altezza" placeholder='altezza'></input>
                <input id="larghezza" placeholder='larghezza'></input>
                <input id="profondità" placeholder='profondità'></input>
                <input id="note" placeholder='note' aria-label='ciao'></input>

                <button onClick={HandleClick}>genera</button>

            </div>

            <div className='qr'>
                {show?<QRCode value={stringa} style={{margin:"0",border:" 5px solid black", padding:"16px"}} />:null }
            </div>
        </div>
    );
}