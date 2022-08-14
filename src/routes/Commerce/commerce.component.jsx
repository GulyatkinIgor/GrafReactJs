import Navigation from "../Navigation/navigation.component"
import Footer from "../Footer/footer.component"
import CommerceCardList from "../ComerceList/ComerceCardList.component";
import React from "react";
import axios from "axios"


class Commerce extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }

  getDataApparts = async () => {
    console.log("fetch Sales", "start");
    const dataAppart = await axios.get(`http://localhost:3000/api/commerce`);
    console.log("fetch Sales", "wait");
    console.log("fetch Sales", dataAppart.request.response);
    const dataJson = JSON.parse(dataAppart.request.response);
    console.log("done  Sales", dataJson);
    this.setState({
      data: dataJson,
      isLoading: false
    });
  };

  componentDidMount() {
    this.getDataApparts();
  }
  render(){
    const {isLoading, data} = this.state
    const dataAparts = data
    return(
       <div>
       <Navigation/>
       <CommerceCardList  dataAparts={dataAparts}/>
       <Footer/>
      </div>
    );
   }
  }
   export default Commerce;