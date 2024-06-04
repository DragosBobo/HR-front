import { IUser } from "../../models/user";

export class UserDatasource{
    datasource :IUser[] = []
  constructor(){
      
  }

  load(){
      this.datasource.push({
        id: 1,
        nume: 'Boboluta',
        prenume: 'Dragos-Daniel',
        locatia: 'TM',
        varsta: 23,
        telefon: '0762031942',
        firmaAsociata: 'Syonic SRL',
        functia: 'developer'
      })
  }
  getDatasource():IUser[]{
      return this.datasource;
  }
}