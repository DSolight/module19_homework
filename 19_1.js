function ownProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}, ${obj[key]}`);
        }    
}
}

const person = {
    name: "Ivan",
    age: 25,
    isMarried: false
};

ownProperties(person);