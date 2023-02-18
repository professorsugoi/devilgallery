import React, { useState, useEffect } from 'react';
import styles from '../styles/Card.module.scss';
import { useFetchNFTs } from '../pages/api/useFetchNFTs';
import { NFTCard } from '../components/nftCard';
import Pagination from '../components/pagination';

const Home = ({ APIKEY }) => {
	const NFTs = useFetchNFTs({ APIKEY });

	//const for card hover animation delay & loading skeleton
	const [hoverDelay, setHoverDelay] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setHoverDelay(true);
		}, 2000);
	}, []);

	// Data fetching logic
	// Whendata is successfully fetched, set 'loading' to false
	useEffect(() => {
		setLoading(false);
	}, []);

	// const for cards pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [cardsPerPage] = useState(20);

	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const currentNFTs = NFTs.slice(indexOfFirstCard, indexOfLastCard);

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(NFTs.length / cardsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div id='root'>
			<div className={styles.container}>
				<div className={styles.cardcontainer}>
					{currentNFTs.map((nft, index) => {
						const description = nft.metadata.description;
						return (
							<NFTCard
								key={index}
								nft={nft}
								description={description}
							></NFTCard>
						);
					})}
				</div>
				<div className={styles.paginationcontainer}>
					<div className={styles.pagination}>
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							pageNumbers={pageNumbers}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

export async function getServerSideProps() {
	return { props: { APIKEY: process.env.APIKEY } };
}
