import SaleCard from '../salesCard/card.component';
import './card-list.styles.css';

const SaleCardList = ({ dataAparts }) => (
  <div className='card-list'>
    {dataAparts.map((dataApart) => {
      console.log("SaleCardData", dataAparts)
      return <SaleCard key={dataApart.id._text} dataApart={dataApart} />;
    })}
  </div>
);

export default SaleCardList;
