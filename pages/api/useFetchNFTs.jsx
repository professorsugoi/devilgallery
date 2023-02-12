import React, { useState, useEffect } from 'react';

const useFetchNFTs = () => {
	const [NFTs, setNFTs] = useState([]);

	const fetchNFTs = async () => {
		console.log('fetchNFTs function called');
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

	useEffect(() => {
		fetchNFTs();
	}, []);

	return NFTs;
};

export { useFetchNFTs };
