const { faker } = require("@faker-js/faker");

const randomId = {
	generate() {
		return Math.floor(Math.random() * 100000 + 1);
	},
};

// 인기 게시물 목데이터 12개 돌려주면 됨.
const bestMock = number => {
	return Array(number)
		.fill()
		.map(() => ({
			id: randomId.generate(),
			title: faker.lorem.sentence(7),
			year: faker.number.int({ min: 2022, max: 2023 }),
			month: faker.number.int({ min: 1, max: 12 }),
			days: faker.number.int({ min: 1, max: 31 }),
			thumbnail: faker.image.cats(140, 140, true), // 너비, 높이, true 설정해야 랜덤으로 나옴
		}));
};

export const BEST_DATA = bestMock(12);
