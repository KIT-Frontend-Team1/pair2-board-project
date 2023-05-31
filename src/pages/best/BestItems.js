import styled from "styled-components";
const BestItems = ({ data }) => {
	return (
		<BestItemsMaster>
			<Rank>인기 게시물</Rank>
			{data.map(data => (
				<PageItemDiv>
					<Line></Line>
					<PageContentBox>
						<TitleDate>
							<Title>{data.title}</Title>
							<DateDiv>
								{data.year}.{data.month}.{data.days}
							</DateDiv>
						</TitleDate>
						<ImgDiv>
							<img
								src={data.thumbnail}
								art=""
								style={{
									borderRadius: "14px",
								}}
							/>
						</ImgDiv>
					</PageContentBox>
				</PageItemDiv>
			))}
		</BestItemsMaster>
	);
};
export default BestItems;

const BestItemsMaster = styled.div`
	background-color: #fff;
	width: 630px;
	margin: 0 auto;
	box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.06);
`;
const Rank = styled.h1`
	width: 630px;
	margin: 0px auto;
	background-color: #fff;
	padding: 40px 50px 20px 50px;
`;
const PageItemDiv = styled.div`
	width: 630px;
	padding: 0px 50px;
	background-color: #fff;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;
const PageContentBox = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TitleDate = styled.div`
	display: flex;
	flex-direction: column;
`;
const Title = styled.div`
	margin: 20px 0px;
`;

const DateDiv = styled.div`
	color: gray;
`;

const Line = styled.div`
	border: solid 1px #d3d3d3;
`;
const ImgDiv = styled.div`
	/* padding: 20px 0px 20px 0px; */
	display: flex;
	justify-content: flex-end;
	margin: 30px 10px 20px 0px;
`;
