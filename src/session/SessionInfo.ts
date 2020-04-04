

export default class SessionInfo{
    sessionId    : string | number;
    serverId     : string;
    isConnected  : boolean;
    lastpingTime : Date;
    inboundTopic : string;

    constructor(
        sessionId    : string | number,
        serverId     : string,
        isConnected  : boolean,
        lastpingTime : Date,
    ){
        this.sessionId = sessionId;
        this.serverId  = serverId;
        this.isConnected = isConnected;
        this.lastpingTime = lastpingTime;
    }

    setConnectedStatus(isConnected  : boolean){
        this.isConnected = isConnected;
    }

}