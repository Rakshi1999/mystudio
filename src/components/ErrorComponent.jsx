import React, { Component } from 'react';

class ErrorComponent extends Component {
    constructor(props){
        super(props);
        this.state = {hasError:false}
    }

    static getDerivedStateFromError(error){
        return {hasError:true}
    }

    componentDidMount(){
        console.log('error component');
    }
    render() {
        if(this.state.hasError){
            return <h2 style={{display:"flex",height:"100vh",width:"100vw", alignItems:"center",justifyContent:"center"}}>Some thing went Wrong please reload the page!!!</h2>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorComponent;