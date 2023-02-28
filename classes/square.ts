import Rectangle from "./rectangle";

export default class Square extends Rectangle {
  constructor(private sideVal: number) {
    super(sideVal, sideVal);
  }
}
