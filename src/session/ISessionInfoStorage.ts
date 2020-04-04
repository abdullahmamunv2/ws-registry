export default interface ISessionInfoStorage {
  has(sessionId: number | string): Promise<boolean>;
  //set(sessionId:)
}
