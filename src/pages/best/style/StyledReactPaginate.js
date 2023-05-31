import styled from "styled-components";
import ReactPaginate from "react-paginate";

const StyledReactPaginate = styled(ReactPaginate)`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 40px 0px;
	width: 630px;
	justify-content: center;
	background-color: #fff;

	.pagination {
		list-style: none;
		outline: none;
	}

	.page-item {
		margin: 0px 14px;
		font-size: 15px;
		cursor: pointer;
	}

	.active-page {
		background-color: #d3d3d3;
		border-radius: 10px;
		padding: 4px 12px;
		color: #333;
	}

	.break,
	.next,
	.previous {
		cursor: pointer;
		font-size: 25px;
	}
`;

export default StyledReactPaginate;
