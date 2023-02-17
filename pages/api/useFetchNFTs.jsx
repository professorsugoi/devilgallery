import React, { useState, useEffect } from 'react';

const useFetchNFTs = ({ APIKEY }) => {
	const [NFTs, setNFTs] = useState([]);

	useEffect(() => {
		const fetchNFTs = async () => {
			const requestOptions = {
				method: 'GET',
			};
			const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${APIKEY}/getNFTsForCollection/`;
			const fetchURL = `${baseURL}?contractAddress=0x231EDa2D0E36E5254515B7625D1201f7b4617cf4&withMetadata=true`;
			const nfts = await fetch(fetchURL, requestOptions).then((data) =>
				data.json()
			);
			if (nfts) {
				setNFTs(nfts.nfts);
			}
		};

		fetchNFTs();
	}, []);

	return NFTs;
};

export { useFetchNFTs };
