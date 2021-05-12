let words = document.getElementById(`words`)
let table = document.getElementById(`table`)

words.addEventListener(`input`, countCharacters)
words.focus()

function countCharacters() {
  let chars = {}
  let total = 0

  for (let char of words.value) {
    if (char != ` ` && char != `\n`) {
      if (chars[char] == null) {
        chars[char] = 0
      }

      chars[char]++
      total++
    }
  }

  table.innerHTML = ``

  for (let char in chars) {
    let percent = (chars[char] / total) * 100
    makeRow(char, `${percent.toFixed(2)}%`)
  }
}

function makeRow(key, value) {
  let row = document.createElement(`div`)
  row.classList.add(`row`)
  table.appendChild(row)

  let keyDiv = document.createElement(`div`)
  keyDiv.classList.add(`key`)
  keyDiv.innerHTML = key
  row.appendChild(keyDiv)

  let valueDiv = document.createElement(`div`)
  valueDiv.classList.add(`value`)
  valueDiv.innerHTML = value
  row.appendChild(valueDiv)
}
