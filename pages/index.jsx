import styles from '../styles/NFTCard.module.css';
import { NFTCard } from '../components/nftCard';
import { useFetchNFTs } from '../pages/api/useFetchNFTs';

const Home = () => {
	const NFTs = useFetchNFTs();

	return (
		<section className={styles.container}>
			<div className={styles.nftcards}>
				{NFTs.length &&
					NFTs.map((nft, index) => {
						const description = nft.metadata.description
							? nft.metadata.description
							: 'No description available';
						return (
							<NFTCard
								key={index}
								nft={nft}
								description={description}
							></NFTCard>
						);
					})}
			</div>
		</section>
	);
};

export default Home;
