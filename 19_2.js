function checkProperty(key, obj) {
    return obj.hasOwnProperty(key);
}

// Пример использования
const person = {
    name: 'John',
    age: 25
};

const Property = 'age';
console.log(checkProperty(Property, person)); // true

const notProperty = 'gender';
console.log(checkProperty(notProperty, person)); // false