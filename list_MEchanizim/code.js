
const request = new XMLHttpRequest()



const addData = (a, b, c, d) => {

    var tbody = document.querySelector('tbody')

    var tr = document.createElement("tr")

    var tdUserId = document.createElement('td')
    var tdId = document.createElement('td')
    var tdTitle = document.createElement('td')
    var tdCompleted = document.createElement('td')

    tdUserId.innerText = a
    tdId.innerText = b
    tdTitle.innerText = c
    tdCompleted.innerText = d

    tr.appendChild(tdUserId)
    tr.appendChild(tdId)
    tr.appendChild(tdTitle)
    tr.appendChild(tdCompleted)

    tbody.appendChild(tr)
}
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(asd => {
        return asd.json()
    }).then(data => {

        data.map(element => {
            addData(
                element.userId,
                element.id,
                element.title,
                element.complated
            )
        });

    })
