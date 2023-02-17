import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, pageNumbers }) => {
	return (
		<div>
			<button
				className='btn'
				disabled={currentPage === 1}
				onClick={() => setCurrentPage(currentPage - 1)}
			>
				&laquo;
			</button>
			{pageNumbers.map((number, index) => {
				if (
					(currentPage <= 3 && number <= 5) ||
					(currentPage > 3 &&
						number >= currentPage - 2 &&
						number <= currentPage + 2) ||
					(currentPage >= pageNumbers.length - 2 &&
						number >= pageNumbers.length - 4)
				) {
					return (
						<button
							key={index}
							className={`btn ${currentPage === number ? 'active' : ''}`}
							onClick={() => setCurrentPage(number)}
						>
							{number}
						</button>
					);
				}
				if (
					currentPage > 3 &&
					number === currentPage - 3 &&
					!pageNumbers.includes(currentPage - 3)
				) {
					return (
						<button key={index} className='btn'>
							...
						</button>
					);
				}
				if (
					currentPage < pageNumbers.length - 2 &&
					number === currentPage + 3 &&
					!pageNumbers.includes(currentPage + 3)
				) {
					return (
						<button href='#' key={index} className='btn'>
							...
						</button>
					);
				}
				return null;
			})}
			<button
				className='btn'
				disabled={currentPage === pageNumbers.length}
				onClick={() => setCurrentPage(currentPage + 1)}
			>
				&raquo;
			</button>
		</div>
	);
};

export default Pagination;
