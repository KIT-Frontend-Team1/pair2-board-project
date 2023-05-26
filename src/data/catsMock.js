const { faker } = require("@faker-js/faker");

const randomId = {
  generate() {
    return Math.floor(Math.random() * 100000 + 1);
  },
};

export const mockCatsData = [
  {
    User: {
      id: randomId.generate(),
      userId: faker.person.firstName(),
      content: faker.lorem.paragraph(),
      myContent: false,
    },
    images: Array(Math.floor(Math.random() * 4) + 2)
      .fill()
      .map(() => faker.image.cats(650, 420, true)),
    Comments: Array(Math.floor(Math.random() * 4) + 1)
      .fill()
      .map(() => {
        return {
          id: randomId.generate(),
          nickname: faker.person.firstName(),
          myComment: false,
        };
      }),
  },
];

// export const catsMock = (number) => {
//   Array(number)
//     .fill()
//     .map(() => ({
//       User: {
//         id: randomId.generate(),
//         userId: faker.person.firstName(),
//         content: faker.lorem.paragraph(),
//         myContent: false,
//         images: Array(Math.floor(Math.random() * 4 + 1))
//           .fill()
//           .map(() => faker.image.cats()),
//       },
//     }));
// };
