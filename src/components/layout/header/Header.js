import styled from "styled-components";
import { flexCenter } from "styles/common";

const Header = () => {
	return (
		<S.Wrapper>
			<img src="logo.png" />
		</S.Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	/* border-bottom: 2px solid ${({ theme }) => theme.PALETTE.brandColor}; */
	${flexCenter}
`;

const S = {
	Wrapper,
};
