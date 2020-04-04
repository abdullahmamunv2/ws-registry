

export default interface IWSRegistry<T>{
    register(sessionId:string|number,socket : T):Promise<void>;
    unregister(sessionId:string|number) : Promise<void>;}