
// mental 
const xanaxButton = document.querySelector('.xanax-button')
const adderallButton = document.querySelector('.adderall-button')
const ritalinButton = document.querySelector('.ritalin-button')
const lexaproButton = document.querySelector('.lexapro-button')

// heart
const lipitorButton = document.querySelector('.lipitor-button')
const carvedilolButton = document.querySelector('.carvedilol-button')
const coumadinButton = document.querySelector('.coumadin-button')
const rosuvastatinButton = document.querySelector('.rosuvastatin-button')

// lungs
albuterolButton = document.querySelector('.albuterol-button')
flonaseButton = document.querySelector('.flonase-button')
ventolinButton = document.querySelector('.ventolin-button')
epiButton = document.querySelector('.epi-button')


const baseURL = `http://localhost:4400`


// mental

const xanaxDesc = (event) => {
    axios.get(`${baseURL}/api/drugs`)
    .then(res => {
        console.log(Object.values(res.data[0]))
        document.getElementById("xanax-desc").textContent = Object.values(res.data[0]).join(" ")
    })
    .catch(err => {
        console.log(error)
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


// heart

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


// lungs

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



const drugsDesc = (event) => {

    let printDesc = document.getElementById("xanax-desc").innerHTML

    axios.post(`${baseUrl}/api/drugsLookedAt`, {name: printDesc})
    .then(res => {
        
    })
}





// mental

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


// heart

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


// lungs

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