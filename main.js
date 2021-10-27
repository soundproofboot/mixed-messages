// Arrays for each part of the joke
let animals = ['chicken', 'cow','horse','pig','penguin','dog','cat','sloth','elephant','hippo','zebra','lion'];
let verbs = ['cross','slap','choke','punch','smell','fight','torch','drink','snip','lift','total','answer'];
let nouns = ['road','farmer','referee','clock','iceberg','grandma','Chrysler','Pepsi','afro','ATM','numbers','riddle'];
let punchlines = ['To get to the other side!','Because he smelled!','Because he was called a foul!','Because he was working class!','To see if it was made of Old Spice!','Because she was so old!','Insurance fraud!','Because they were all out of Mountain Dew!','Because it was big!','Because he was a little light on cash!','To see how it all added up!','Because he was so smart and knew the answer so he solved it!'];

function setupMaker () {
    let animal = animals[Math.floor(Math.random() * 12)]
    let verb = verbs[Math.floor(Math.random() * 12)]
    let noun = nouns[Math.floor(Math.random() *12)]
    return `Why did the ${animal} ${verb} the ${noun}?`;
}

function punchlineMaker() {
    let punchline = punchlines[Math.floor(Math.random() *12)]
    return punchline;
}

