import React, { useState, useEffect } from 'react';
import styles from '../styles/Card.module.scss';
import { useFetchNFTs } from '../pages/api/useFetchNFTs';
import { NFTCard } from '../components/nftCard';
import Pagination from '../components/pagination';

const Home = ({ APIKEY }) => {
	const NFTs = useFetchNFTs({ APIKEY });

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
		<div id='root' className={styles.container}>
			<div className={styles.layout}></div>
			<div className={styles.cardcontainer}>
				{currentNFTs.map((nft, index) => {
					const description = nft.metadata.description;
					return (
						<NFTCard key={index} nft={nft} description={description}></NFTCard>
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
	);
};

export default Home;

export async function getStaticProps() {
	return { props: { APIKEY: process.env.APIKEY } };
}
