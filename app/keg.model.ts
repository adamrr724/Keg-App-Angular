export class Keg {
  public pints: number;
  constructor(
    public name: string,
    public type: string[],
    public ABV: number,
    public price: number
  ) {
    this.pints = 12;
    }
}
