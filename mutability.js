/*const person = {
name: 'Rick',
    age: 77,
    country: 'US',
}*/

const clone1 = {
    name: person.name,
    age: person.age,
    country: person.country,
}

const clone2 = {
    name: person.name,
    age: person.age,
    country: person.country,
}

Object.freeze(clone1)
Object.freeze(clone2)

person.country = 'FR'
person.age = 78
const samePerson = person