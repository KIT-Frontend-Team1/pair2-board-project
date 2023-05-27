const { faker } = require("@faker-js/faker");

const randomId = {
	generate() {
		return Math.floor(Math.random() * 100000 + 1);
	},
};

const mockCatsData = {
	id: randomId.generate(),
	userId: faker.person.firstName(),
	content: faker.lorem.sentence(5),
	myContent: false,
	images: Array(Math.floor(Math.random() * 4) + 2)
		.fill()
		.map(() => faker.image.cats(650, 420, true)),
	Comments: Array(Math.floor(Math.random() * 3) + 1)
		.fill()
		.map(() => {
			return {
				id: randomId.generate(),
				nickname: faker.person.firstName(),
				comment: faker.lorem.sentence(4),
				myComment: false,
			};
		}),
};

export default mockCatsData;
