const container = document.querySelector("#container")

// Red
const red = document.createElement('p')
red.textContent = 'Hey I\'m red!'
red.setAttribute('style', 'color:red')
container.appendChild(red)

//Blue
const blue = document.createElement('h3')
blue.textContent = 'I\m a blue h3'
blue.setAttribute('style', 'color:blue')
container.appendChild(blue)

//div
const div = document.createElement('div')
div.setAttribute('style', 'border: 1px solid black; background-color: pink;')
{ // h1
    const h1 = document.createElement('h1')
    h1.textContent = 'I\'m in a div'
    div.appendChild(h1)
}
{ // p
    const p = document.createElement('p')
    p.textContent = 'Me too!'
    div.appendChild(p)
}
container.appendChild(div)


const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    console.log(e.target)
    e.target.style.background = 'blue'
});


const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

outer.addEventListener('click', (e) => {
    const cT = e.currentTarget;
    console.group('outer')
    console.log(cT)
    console.log(e)
    console.log(e.currentTarget)
    console.groupEnd();
});

inner.addEventListener('click', (e) => {
    const cT = e.currentTarget;
    console.group('outer')
    console.log(cT)
    console.log(e.currentTarget)
    console.groupEnd();
    e.stopPropagation();
});
