export default interface GetInterface {
  (getResource: Function): Promise<any>;
}
