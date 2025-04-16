console.log('Initial set up done.');
const people = [
    {
        id: 1,
        name: 'Shanto',
        age: 30,
        occupation: "Software Engineer",
        contact: {
            eamil: "shanto@gmail.com"
        },
        address: {
            street: "123 Main st",
            city: "San Francisco",
            state: "CA",
            zip: "20105"
        },
        hobbies: ["coding", "hiking", "Photography"],
    },
    {
        id: 2,
        name: 'Rakib',
        age: 40,
        occupation: "Software Engineer",
        contact: {
            eamil: "rakib@gmail.com"
        },
        address: {
            street: "123 Main st",
            city: "San Francisco",
            state: "CA",
            zip: "20105"
        },
        hobbies: ["coding", "hiking", "Photography"],
    },
    {
        id: 3,
        name: 'Rubel',
        age: 50,
        occupation: "Software Engineer",
        contact: {
            eamil: "rubel@gmail.com"
        },
        address: {
            street: "123 Main st",
            city: "San Francisco",
            state: "CA",
            zip: "20105"
        },
        hobbies: ["coding", "hiking", "Photography"],
    },
];

const peopleList = document.getElementById('people-list');


const renderPeopleList = (people) => {
    people.map((person) => {
        const li = document.createElement('li');
        li.classList.add("text-red-400", "coursor-pointer");
        li.textContent = person.name;
        peopleList.appendChild(li)
    })
}
renderPeopleList(people)