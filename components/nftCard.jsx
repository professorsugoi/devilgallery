import ReactMarkdown from 'react-markdown';
import styles from '../styles/Card.module.scss';

const NFTCard = ({ nft, description }) => {
	return (
		<div className={styles.card} data-animated={animated}>
			<div className={styles['card-header']}>
				<img src={nft.media[0].gateway} alt={nft.metadata.name} />
			</div>
			<div className={styles['card-body']}>
				<h3>{nft.metadata.name}</h3>
				<div className={styles['tag-container']}>
					{nft.metadata.attributes.map((attribute, index) => (
						<div
							key={index}
							className={`${styles.tag} ${styles['tag-purple']}`}
						>
							{attribute.trait_type}: {attribute.value}
						</div>
					))}
				</div>
				<span className={styles.description}>
					<ReactMarkdown>{description}</ReactMarkdown>
				</span>
			</div>
		</div>
	);
};
export { NFTCard };
