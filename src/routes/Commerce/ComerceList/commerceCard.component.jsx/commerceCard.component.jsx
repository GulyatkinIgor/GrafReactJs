import 'commerceCard.styles.css';

const CommerceCard = ({ dataAparts }) => {
  const { Id, Category } = dataAparts;

  return (
    <div className='card-container'>
     
      <h2>{Id}</h2>
      <p>{Category}</p>
    </div>
  );
};



export default CommerceCard;
