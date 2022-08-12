import './card.styles.css';

const SaleCard = ({ dataAparts }) => {
  const { Id, Category } = dataAparts;

  return (
    <div className='card-container'>
     
      <h2>{Id}</h2>
      <p>{Category}</p>
    </div>
  );
};

{/* <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p> */}

export default SaleCard;

