import { IFirma } from "../../models/firma";


export class FrimaDatasource{


    datasource :IFirma[] = []
    constructor(){
        
    }

    load(){
        this.datasource.push({
            id: 1,
            denumire: "HRCloud",
            numarAngajati: 2,
            validUntil: new Date,
            locatie: "Timisoara"
        },
        {
            id: 2,
            denumire: "Piata9",
            numarAngajati: 100,
            validUntil: new Date,
            locatie: "Oradea"
        })
    }
    getDatasource():IFirma[]{
        return this.datasource;
    }
    
}