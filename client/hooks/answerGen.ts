const facilitators = ['daph', 'jared', 'rich', 'hannah']
const answ: string[] = []

function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let i = 0; i < 10; i++) {
  const indexAns = getRandomNumber(0, 3)
  answ.push(facilitators[indexAns])
}
const arr = new Array(10)
  .fill('')
  .map((e) => facilitators[getRandomNumber(0, 3)])
export default arr
