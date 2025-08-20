/* BEGIN LEARNING JS FOR JUNIOR */

//console.log(window)

//console.log(window.document === document) // => has a same object reference id

console.log(
	'Encode: ' + document.inputEncoding + '\n',
	'Window Language: ' + window.navigator.language + '\n',
	'Window Width: ' + window.innerWidth + '\n',
	'Window Height: ' + window.innerHeight + '\n',
	'Document URI: ' + document.documentURI + '\n',
	'Document URL: ' + document.URL + '\n',
	'Document Domain: ' + document.domain + '\n',
	'Document Script Length: ' + document.scripts.length + '\n',
	'Document Script 1: ' + document.scripts.item(0).text + '\n',
	'Document Ready Status: ' + document.readyState,
)

document.addEventListener('readystatechange', () => {
	console.log('Page state change: ', document.readyState)
})

window.addEventListener('load', () => {
	console.log('This page is fully loaded.')
})

//alert('hello world')

//const element = document.getElementById('a') 
//const elements = document.getElementsByClassName('exampleDiv')
const elements = document.getElementsByTagName('div')
//const elements = document.querySelectorAll('#a')
//const elements = document.querySelectorAll('.exampleDiv')

/*
let i = 1

while(i <= 10){
	console.log('hello world', i)

	i++
}

for(let i = 1; i <= 10; i++){
	console.log('hello word', i)
}

for(let el of elements){
	console.log(el)
}

console.log('---')

for(let key in elements){
	console.log(elements[key])
}

for(const image of document.images){
	console.log(image)
}
*/

/* it yet not support
elements.forEach((el, index) => {
	console.log(el, index)
})
*/