const content = "CLGT";

function setup() {
  createCanvas(800, 200);
  resetMatrix();
  const barcode = new Barcode(rect, translate, 1.5);
  barcode.create(content);
  barcode.draw();
}
