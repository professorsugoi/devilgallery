import ReactMarkdown from 'react-markdown';

const NFTCard = ({ nft, description }) => {
	return (
		<div className='card card-image-cover'>
			<img src={nft.media[0].gateway} alt={nft.metadata.name} />
			<div className='card-body'>
				<h2 className='card-header'>{nft.metadata.name}</h2>
				<div className='text-content'>
					<ReactMarkdown>{description}</ReactMarkdown>
				</div>
				<div className='text-content2'>
					<ul>
						{nft.metadata.attributes.map((attribute, index) => (
							<li key={index}>
								{attribute.trait_type}: {attribute.value}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export { NFTCard };
