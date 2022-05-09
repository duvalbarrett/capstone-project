const lipitorButton = document.querySelector('.lipitor-button');
const carvedilolButton = document.querySelector('.carvedilol-button');
const coumadinButton = document.querySelector('.coumadin-button');
const rosuvastatinButton = document.querySelector('.rosuvastatin-button');

const baseURL= `http://localhost:4400`


const lipitorDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("lipitor-desc").textContent = Object.values(res.data[4]).join(" ")
        })
        .catch(err => {
            console.log(error)
        })
}

const carvedilolDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("carvedilol-desc").textContent = Object.values(res.data[5]).join(" ")
        })
        .catch(err => {
            console.log(error)
        })
}

const coumadinDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("coumadin-desc").textContent = Object.values(res.data[6]).join(" ")
        })
        .catch(err => {
            console.log(error)
        })
}

const rosuvastatinDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
    .then(res => {
        console.log(Object.values(res.data[0]))
        document.getElementById('rosuvastatin-desc').textContent = Object.values(res.data[7]).join(" ")
    })
    .catch(err => {
        console.log(error)
    })
}



lipitorButton.addEventListener('click', () => {
lipitorDesc()
})

carvedilolButton.addEventListener('click', () => {
carvedilolDesc()
})

coumadinButton.addEventListener('click', () => {
coumadinDesc()
})

rosuvastatinButton.addEventListener('click', () => {
    rosuvastatinDesc()
})