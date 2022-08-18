import './card-list.styles.css'

const SaleCardList = (currentItem) => {
  
  const dataAparts = currentItem.dataAparts

  const setTitleImage = (arrayImage) => {
    var titleImage = "https://picsum.photos/id/1018/1000/600/"
    Array.isArray(arrayImage) ? titleImage = arrayImage[0]._attributes.url : titleImage = arrayImage?._attributes?.url
    console.log("HUI", arrayImage) 
    return titleImage
  }

  const click = (item) => {
    console.log("PIZZZZZZZZZDA", item.Images.Image[0]._attributes.url)
    currentItem.onItem(item)
  }

  return(
    <div>
    <div className='card-list'>
        {dataAparts.map((item)=>{
          const arrayImage = item.Images.Image
          const titleImage = setTitleImage(arrayImage)
          console.log (item, )
          return(
            <button onClick={ () => click(item)}>
            <div>
        <a class="block relative h-48 rounded overflow-hidden">
          <img src={titleImage}></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.Locality._text}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{item.Title._text}</h2>
          <p class="mt-1">{item.Price._text}</p>
        </div>
      </div>
        </button>            
  
  )
  
})}
     
      
    </div>
</div>
    )
};
  

   
export default SaleCardList;

