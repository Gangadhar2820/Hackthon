const canvas = document.querySelector("canvas");
canvas.height = 500;
canvas.width = 500;
const ctx = canvas.getContext("2d");
ctx.font = "50px Arial";

const drawDice = () => {
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 250);
  ctx.lineTo(150, 250);
  ctx.lineTo(150, 150);
  ctx.lineTo(180, 120);
  ctx.lineTo(280, 120);
  ctx.lineTo(280, 220);
  ctx.lineTo(250, 250);
  ctx.moveTo(250, 150);
  ctx.lineTo(280, 120);
  ctx.stroke();
};

const generateDiceNumber = () => {
  let randNum = Math.ceil(Math.random() * 6);
  return randNum;
};

document.onkeydown = (e) => {
  if (e.code === "Space") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDice();
    let diceNumber = generateDiceNumber();
    ctx.fillText(diceNumber.toString(), 190, 210);
  }
};
