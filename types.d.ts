export interface Circle { id: string; name: string }
export interface Mak { id: string; name: string; circles: Circle[] }
export interface Corporation { id: string; name: string; maks: Mak[] }
