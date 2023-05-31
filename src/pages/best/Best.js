import { BEST_DATA } from "data/bestMock";
import React, { useState } from "react";
import BestItems from "./BestItems";
import StyledReactPaginate from "./style/StyledReactPaginate";
import styled from "styled-components";

const Best = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const items = 3;
	const pageCount = Math.ceil(BEST_DATA.length / items);

	const currentItems = BEST_DATA.slice(
		currentPage * items,
		currentPage * items + 3,
	);

	const handlePageClick = ({ selected: selectedPage }) => {
		setCurrentPage(selectedPage);
	};

	return (
		<>
			<BestItems data={currentItems} />
			<WrraperMaster>
				<StyledReactPaginateWapper>
					<StyledReactPaginate
						previousLabel={"‹"}
						nextLabel={"›"}
						breakLabel={"..."}
						breakClassName={"break"}
						pageCount={pageCount}
						pageRangeDisplayed={4}
						onPageChange={handlePageClick}
						containerClassName={"pagination"}
						subContainerClassName={"pages pagination"}
						activeClassName={"active-page"}
						pageClassName={"page-item"}
						previousClassName={"previous"}
						nextClassName={"next"}
					/>
				</StyledReactPaginateWapper>
			</WrraperMaster>
		</>
	);
};

export default Best;
const StyledReactPaginateWapper = styled.div`
	display: flex;
	justify-content: center;
	width: 630px;
`;
const WrraperMaster = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
