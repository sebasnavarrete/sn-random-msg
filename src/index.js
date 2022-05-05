const messages = [
  "Sebas",
  "Nia",
  "Luisa",
  "Diego",
  "Mona",
];

const randomMsg = () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  console.log(msg);
}

module.exports = { randomMsg };