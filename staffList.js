import { faker } from '@faker-js/faker';

const staffList = [
  {
    key: 0,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
  },
  {
    key: 1,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
  },
  {
    key: 2,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
  },
  {
    key: 3,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
  },
  {
    key: 4,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
  },
  {
    key: 5,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
  },
];

export default staffList;

