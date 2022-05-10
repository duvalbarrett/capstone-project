const xanaxButton = document.querySelector('.xanax-button');
const adderallButton = document.querySelector('.adderall-button');
const ritalinButton = document.querySelector('.ritalin-button');
const lexaproButton = document.querySelector('.lexapro-button');

const baseURL = 'http://localhost:4400'


const xanaxDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
    .then(res => {
        console.log(Object.values(res.data[0]))
        document.getElementById("xanax-desc").textContent = Object.values(res.data[0]).join(" ")
    })
    .catch(err => {
        console.log('error')
    })
}

const adderallDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
    .then(res => {
        console.log(Object.values(res.data[0]))
        document.getElementById("adderall-desc").textContent = Object.values(res.data[1]).join(" ")
    })
    .catch(err => {
        console.log(error)
    })
}

const ritalinDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
    .then(res => {
        console.log(Object.values(res.data[0]))
        document.getElementById("ritalin-desc").textContent = Object.values(res.data[2]).join(" ")
    })
    .catch(err => {
        console.log(error)
    })
}

const lexaproDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
    .then(res => {
        console.log(Object.values(res.data[0]))
        document.getElementById('lexapro-desc').textContent = Object.values(res.data[3]).join(" ")
    })
    .catch(err => {
        console.log(error)
    })
}



xanaxButton.addEventListener('click', () => {
    xanaxDesc()
})

adderallButton.addEventListener('click', () => {
    adderallDesc()
})

ritalinButton.addEventListener('click', () => {
    ritalinDesc()
})

lexaproButton.addEventListener('click', () => {
    lexaproDesc()
})

