let number = 9
let string = 'string'

// console.log(number)
// console.log(string)

// Arrays

let array = [12, 3244, 54, 12, 6, 56, 3, 321]

// console.log(array.length)
// console.log(array[4])

// for (let i = 0; i < array.length; i += 1) {
//     console.log('showing array in position: ' + i)
//     console.log(array[i])
// }

// Fil array with random values

let empty_array = []
let number_of_items = 50

for (let i = 0; i < number_of_items; i++) {
    let random_value = Math.random() * 1000
    empty_array.push(random_value)
}

let object = {
    x: 100,
    y: 200,
    width: 100,
    height: 300
}

let div = document.createElement('div')
div.style.position = 'fixed'
div.style.width = object.width + 'px'
div.style.height = object.height + 'px'
div.style.top = object.y + 'px'
div.style.left = object.x + 'px'
div.style.backgroundColor = '#f00'

document.body.appendChild(div)

console.log(object)