import IWSRegistry from '../IWSRegistry';

export default class WSRegistry<T> implements IWSRegistry<T> {
  //constructor()
  register(sessionId: string | number, socket: T): Promise<void> {
    throw new Error('Method not implemented.');
  }
  unregister(sessionId: string | number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
