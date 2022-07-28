
// function addingEventListener() {
// }


//Annonymous Function
// const input = document.getElementById('button')

// input.addEventListener('click', function() {
//     alert('I was clicked!');
//   })

 
//Alternative way to call the function
const input = document.getElementById('button');
function clickAlert() {
  alert('I was clicked!')
}
input.addEventListener('click', clickAlert)


const input1 = document.getElementById('div1');
function clickAlert1() {
  alert('I am in 1!')
}
input1.addEventListener('mouseover', clickAlert1)

// const input2 = document.getElementById('div2');
// function clickAlert2() {
//   alert('I am in 2!')
// }
// input2.addEventListener('click', clickAlert2)

// const input3 = document.getElementById('div3');
// function clickAlert3() {
//   alert('I am in 3!')
// }
// input3.addEventListener('click', clickAlert3)

// const input4 = document.getElementById('div4');
// function clickAlert4() {
//   alert('I am in 4!')
// }
// input4.addEventListener('click', clickAlert4)

// const input5 = document.getElementById('div5');
// function clickAlert5() {
//   alert('I am in 5!')
// }
// input5.addEventListener('click', clickAlert5)



