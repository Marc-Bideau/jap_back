import { User } from "@prisma/client";

export class UpdateControleDto{
    id:number;
    listeExercice:string;
    listeReponse:string;
    note:number; 
    personneId:number;
} 