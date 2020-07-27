let words = document.getElementById(`words`)
let frequencies = document.getElementById(`frequencies`)

words.addEventListener(`input`, countCharacters)
words.focus()

function countCharacters() {
  frequencies.innerHTML = ``
  let counts = {}
  let total = 0

  for (let char of words.value) {
    if (char != ` ` && char != `\n`) {
      if (counts[char] == null) {
        counts[char] = 0
      }

      counts[char]++
      total++
    }
  }

  for (let char in counts) {
    let percent = (counts[char] / total) * 100

    let frequency = document.createElement(`div`)
    frequency.classList.add(`frequency`)
    frequencies.appendChild(frequency)

    let characterDiv = document.createElement(`div`)
    characterDiv.classList.add(`character`)
    characterDiv.innerHTML = char
    frequency.appendChild(characterDiv)

    let percentDiv = document.createElement(`div`)
    percentDiv.classList.add(`percent`)
    percentDiv.innerHTML = `${percent.toFixed(2)}%`
    frequency.appendChild(percentDiv)
  }
}