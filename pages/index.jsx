import styles from '../styles/NFTCard.module.css';
import { NFTCard } from '../components/nftCard';
import { useState, useEffect } from 'react';

const Home = () => {
	const [NFTs, setNFTs] = useState([]);

	useEffect(() => {
		fetchNFTs();
	}, []);

	// Fetches all NFTs in a collection
	const fetchNFTs = async () => {
		var requestOptions = {
			method: 'GET',
		};
		const api_key = process.env.NEXT_PUBLIC_KEY;
		const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTsForCollection/`;
		const fetchURL = `${baseURL}?contractAddress=0x231EDa2D0E36E5254515B7625D1201f7b4617cf4&withMetadata=${'true'}`;
		const nfts = await fetch(fetchURL, requestOptions).then((data) =>
			data.json()
		);
		if (nfts) {
			console.log('NFTs in collection:', nfts);
			setNFTs(nfts.nfts);
		}
	};

	return (
		<div className='flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center'>
			{NFTs.length &&
				NFTs.map((nft) => {
					return <NFTCard nft={nft}></NFTCard>;
				})}
		</div>
	);
};

export default Home;
