const albuterolButton = document.querySelector('.albuterol-button');
const flonaseButton = document.querySelector('.flonase-button');
const ventolinButton = document.querySelector('.ventolin-button');
const epiButton = document.querySelector('.epi-button');


const baseURL = `http://localhost:4400`


const albuterolDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("albuterol-desc").textContent = Object.values(res.data[8]).join(" ")
        })
        .catch(err => {
            console.log(error)
        })
}

const flonaseDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("flonase-desc").textContent = Object.values(res.data[9]).join(" ")
        })
        .catch(err => {
            console.log(error)
        })
}

const ventolinDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("ventolin-desc").textContent = Object.values(res.data[10]).join(" ")
        })
        .catch(err => {
            console.log(error)
        })
}


const epiDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
    .then(res => {
        console.log(Object.values(res.data[0]))
        document.getElementById('epi-desc').textContent = Object.values(res.data[11]).join(" ")
    })
    .catch(err => {
        console.log(error)
    })
}




albuterolButton.addEventListener('click', () => {
albuterolDesc()
})

flonaseButton.addEventListener('click', () => {
flonaseDesc()
})

ventolinButton.addEventListener('click', () => {
ventolinDesc()
})

epiButton.addEventListener('click', () => {
    epiDesc()
})