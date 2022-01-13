let beVerbs = ['is', "isn't"]
let intransientVerbs = ['goes', 'runs', 'walks', 'drives', 'jaunts', 'flies', 'shuffles', 'scoots']
let transientVerbs = ['eats', 'licks', 'punches', 'hugs', 'loves', 'hates']
let subjects = ['Reice', 'Jace', 'Jordan', 'Katie', 'Curtis', 'James', 'Dennis', 'Kim']
let nicePreps = ['to the store', 'to the bar', 'down the street', 'home', 'in heels', 'in bed', 'around the world', 'on a boat']
let niceAdjs = ['cute', 'nice', 'beautiful', 'smart', 'sexy', 'fun', 'talented', 'inspiring', 'wonderful', 'sober']
let meanAdjs = ['crazy', 'mean', 'dumb', 'silly', 'old', 'cheugy', 'crass', 'an idiot', 'drunk', 'tipsy', 'wasted', 'dizzy', 'stinky']

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
console.log(makeSentence())
console.log(makeSentence())
console.log(makeSentence())
console.log(makeSentence())
console.log(makeSentence())
console.log(makeSentence())