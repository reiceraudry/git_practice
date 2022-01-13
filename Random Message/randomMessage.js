let beVerbs = ['is', "isn't"]
let intransientVerbs = ['goes', 'runs', 'walks', 'listens to', 'slaps']
let transientVerbs = ['eats', 'licks', 'punches']
let subjects = ['Reice', 'Jace', 'Jordan', 'Katie', 'Curtis', 'James', 'Dennis']
let nicePreps = ['to the store', 'to the bar', 'down the street']
let niceAdjs = ['cute', 'nice', 'beautiful']
let meanAdjs = ['crazy', 'mean', 'dumb']

//console.log(`${subjects[0]} ${intransientVerbs[0]} ${nicePreps[0]}`)
//console.log(`${subjects[1]} ${beVerbs[0]} ${niceAdjs[2]}`)

const makeSentence = () => {
    let randomVerbNum = Math.floor(Math.random() * 4)
    let verbArray = []
    if (randomVerbNum === 1) {
        verbArray = intransientVerbs
        return `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbArray[Math.floor(Math.random() * verbArray.length)]} ${nicePreps[Math.floor(Math.random() * nicePreps.length)]}`
    } else if (randomVerbNum === 2) {
        verbArray = transientVerbs
        return `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbArray[Math.floor(Math.random() * verbArray.length)]} ${subjects[Math.floor(Math.random() * subjects.length)]}`
    } else if (randomVerbNum === 3) {
        verbArray = beVerbs
        return `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbArray[Math.floor(Math.random() * verbArray.length)]} ${niceAdjs[Math.floor(Math.random() * niceAdjs.length)]}`
    } else {
        verbArray = beVerbs
        return `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbArray[Math.floor(Math.random() * verbArray.length)]} ${meanAdjs[Math.floor(Math.random() * meanAdjs.length)]}`
    }
};

console.log(makeSentence())
console.log(makeSentence())
console.log(makeSentence())