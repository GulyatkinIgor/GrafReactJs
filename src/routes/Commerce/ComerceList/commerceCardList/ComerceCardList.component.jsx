import './commerceCardList.styles.css'

const CommerceCardList = ({ dataAparts }) => {

  return(
    <div className='card-list'>
        {dataAparts.map((Category,Id)=>{
          console.log(dataAparts[1].Category._text)
          return(
            <h2>Category: {Category.Category._text}</h2>
            
           
          )

        })}
     
    </div>
    )
};
  

   
export default CommerceCardList;
