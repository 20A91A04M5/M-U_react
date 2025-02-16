
import { Component } from "react";

class Fetchprod extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            card:null
        }
        console.log("constructor")
    }
    componentDidMount(){
       
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json()).then(data=>this.setState({data}))
    }
    
    render(){
        console.log("render")
        console.log(this.state)
        {}
        return(
            <>
            {this.state.data.map((val,ind)=>{
                return(
                    <>
                    <div style={{border:"2px solid black",textAlign:"center"}} key={val.id}>
                        <div>
                            <img src={val.image} height={200} width={200} alt="" />
                        </div>
                        <div>
                            <h1>{val.category}</h1>
                            <h4 style={{width:"400px", height:"200px",overflow:"scroll",overflowY:"scroll",overflowX:"hidden"}}>{val.description}</h4>
                            <h5>{val.price}</h5>
                        </div>
                    </div>
                    </>
                )
            })}
            </>
        )
    }
}

export default Fetchprod
