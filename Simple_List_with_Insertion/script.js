document.querySelector('form').addEventListener('submit', addLi)

function addLi(e) {
  e.preventDefault();
  let input = document.querySelector('input')
  if (input.value !== "") {
    let listItem = document.createElement('li')
    listItem.innerHTML = input.value
    document.querySelector('ul').appendChild(listItem)
   
  }
   input.value = ''
}
