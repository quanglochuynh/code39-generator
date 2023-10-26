const code39 = {
  0: "111221211",
  1: "211211112",
  2: "112211112",
  3: "212211111",
  4: "111221112",
  5: "211221111",
  6: "112221111",
  7: "111211212",
  8: "211211211",
  9: "112211211",
  A: "211112112",
  B: "112112112",
  C: "212112111",
  D: "111122112",
  E: "211122111",
  F: "112122111",
  G: "111112212",
  H: "211112211",
  I: "112112211",
  J: "111122211",
  K: "211111122",
  L: "112111122",
  M: "212111121",
  N: "111121122",
  O: "211121121",
  P: "112121121",
  Q: "111111222",
  R: "211111221",
  S: "112111221",
  T: "111121221",
  U: "221111112",
  V: "122111112",
  W: "222111111",
  X: "121121112",
  Y: "221121111",
  Z: "122121111",
  "-": "121111212",
  ".": "221111211",
  " ": "122111211",
  $: "121212111",
  "/": "121211121",
  "+": "121112121",
  "%": "111212121",
  "*": "121121211",
};

class Barcode {
  constructor(
    rectFunction = () => {},
    translateFunction = () => {},
    narrowWidth = 1.8,
    wideWidth
  ) {
    this.barcode = "";
    this.height = 100;
    this.length = 0;
    this.rectFunction = rectFunction;
    this.translateFunction = translateFunction;
    this.narrowWidth = narrowWidth;
    this.wideWidth = wideWidth ? wideWidth : narrowWidth * 3.5;
  }

  create(content = "") {
    content = "*" + content + "*";
    this.length = content.length;
    for (let i = 0; i < content.length; i++) {
      this.barcode += code39[content[i].toUpperCase()];
    }
  }

  draw() {
    fill(0);
    noStroke();
    translate(30, 105);
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < 9; j++) {
        if (j % 2 === 0) {
          if (this.barcode[i * 9 + j] === "1") {
            this.rectFunction(0, 0, this.narrowWidth, this.height);
            translate(this.narrowWidth, 0);
          } else {
            this.rectFunction(0, 0, this.wideWidth, this.height);
            translate(this.wideWidth, 0);
          }
        } else {
          if (this.barcode[i * 9 + j] === "1") {
            this.translateFunction(this.narrowWidth, 0);
          } else {
            this.translateFunction(this.wideWidth, 0);
          }
        }
      }
      this.translateFunction(this.narrowWidth, 0);
    }
  }
}
