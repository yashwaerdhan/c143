import React,{Component} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import { Header,Icon } from "react-native-elements";
import{RFValue} from "react-native-responsive-fontsize";
import axios from 'axios';
export default class Homescreen extends Component{
    constructor(){
        super();
        this.state={
            movieDetails:{}
        }
    }
    componentDidMount(){
        this.getmovie()
    }

    getmovie=()=>{
        const url="http://localhost:5000/get-movie"
        axios
        .get(url)
        .then(response=>{
            let details=response.data.data
            details["duration"]=this.timeconvet(details.duration)
            this.setState({moviedetails:details})
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
     likedmovie=()=>{
        const url="http://localhost:5000/liked-movie"
        axios
        .post(url)
        .then(response=>{
            this.getmovie()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    dislikedmovie=()=>{
        const url="http://localhost:5000/disliked-movie"
        axios
        .post(url)
        .then(response=>{
            this.getmovie()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    notwatched=()=>{
        const url="http://localhost:5000/did-not-watch"
        axios
        .post(url)
        .then(response=>{
            this.getmovie()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    render(){
        const {movieDetails}=this.state
        if (movieDetails.post_link){
            
        }
    }
}