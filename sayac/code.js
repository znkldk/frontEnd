var kare = document.querySelector('.bisi')
var p = document.querySelectorAll('p')

kare.addEventListener('click', e => {
    const a = Number(p[0].innerText)
    p.forEach(pp => {
        pp.innerText = a + 1
    })
})