
import { Component } from "react";

export default class Singlecard extends Component{
    state={
        count:1,
        card:null
    }
    handledec=()=>{
        this.setState({count:this.state.count-1})
        if(this.state.count==1){
            this.setState({count:1})
        }
    }
    handleinc=()=>{
        this.setState({count:this.state.count+1})
        if(this.state.count==20){
            this.setState({count:20})
        }
    }
    componentDidMount(){
        fetch(`https://fakestoreapi.com/products/${this.state.count}`)
        .then(res=>res.json()).then(data=>this.setState({card:data}))
    }
    componentDidUpdate(a,prev,b){
        console.log("prev",prev.count)
        console.log("new",this.state.count)
        if(prev.count!==this.state.count){
            fetch(`https://fakestoreapi.com/products/${this.state.count}`)
            .then(res=>res.json()).then(data=>this.setState({card:data}))
        }
    }
    render(){
        return (
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column", textAlign:"center",border:"2px solid blue"}}>
                {
                    <>
                    <p>Mounting & updating</p>
                    <h1 style={{width:"400px"}}>{this.state.card && this.state.card.title}</h1>
                    <img style={{margin:"0% 40%"}} src={this.state.card && this.state.card.image} alt="" width={100} height={100} />
                    </>
                } <br />
                {this.state.count}
                <button onClick={this.handledec}>Pre</button>
                <button onClick={this.handleinc}>Inc</button>
            </div>
            
        )
    }
}