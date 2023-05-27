import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";

const { faker } = require("@faker-js/faker");
import { CustomNextArrow, CustomPrevArrow } from "./CustomArray";
const Slide = () => {
	const imageUrls = [];
	for (let i = 0; i < 5; i++) {
		const imageUrl = faker.image.cats(530, 420, true);
		imageUrls.push(imageUrl);
	}

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		fade: true,
		centerMode: true,
		pauseOnHover: true,
		nextArrow: <CustomNextArrow />,
		prevArrow: <CustomPrevArrow />,
	};

	return (
		<S.Container>
			<Slider {...settings}>
				{imageUrls.map((imageUrl, index) => (
					<S.ImgBox key={index}>
						<S.Img src={imageUrl} alt={`Image ${index + 1}`} />
					</S.ImgBox>
				))}
			</Slider>
		</S.Container>
	);
};

export default Slide;
const ImgBox = styled.div`
	width: 530px;
	height: 420px;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const Container = styled.div`
	width: 630px;
	height: 420px;
	overflow: hidden;
	z-index: 10;
`;
const S = {
	Img,
	Container,
	ImgBox,
};
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import React from 'react'
// import Slider from 'react-slick'
// import styled from 'styled-components'
// import { CustomNextArrow, CustomPrevArrow } from './CustomArrow'
// const SimpleSlider = ({ ImgArr }) => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <CustomNextArrow />,
//         prevArrow: <CustomPrevArrow />,
//     }
//     return (
//         <Wrapper>
//             <Slider {...settings}>
//                 {ImgArr.map(img => {
//                     return (
//                         <ImageContainer>
//                             <Img src={${img}} />
//                         </ImageContainer>
//                     )
//                 })}
//             </Slider>
//         </Wrapper>
//     )
// }

// export default SimpleSlider
// const ImageContainer = styled.div
//     width: 300px;
//     height: 500px;
//     background-color: skyblue;

// const Img = styled.img
//     background-color: #444;
//     width: 100%;
//     height: 100%;

// const Wrapper = styled.div
//     width: 500px;
//     height: 500px;
//     background-color: grey;
