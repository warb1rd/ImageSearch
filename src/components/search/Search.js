import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/imageResults.js';
import apiKey from '../../config_keys.js'

class Search extends Component {
  state = {
      searchText: "",
      amount: 5,
      apiUrl: "https://pixabay.com/api",
      apiKey: apiKey,
      images:[]
  }

  onTextChange = (e) => { 
      const val = e.target.value
    this.setState({
        [e.target.name]: val}, () => {
            if(val === ""){
                this.setState({
                    images: []
                })
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then((apiResponse) => {
                    this.setState({
                        images: apiResponse.data.hits
                    })
                })
                .catch((err) => {
                    console.log(err)
                }) 
            }
           
        })
  }

  onAmountChange = (e, index, value) => {
      this.setState({
          amount: value
      })
  }
  
    render() {
    return (
      <div>
        <TextField 
            name="searchText" 
            value={this.state.searchText} 
            onChange={this.onTextChange}
            floatingLabelText="Search"
            fullWidth = {true}
        />

        <br/>
        <SelectField
            name="amount"
            floatingLabelText="How Many?"
            value={this.state.amount}
            onChange={this.onAmountChange}>

          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
      </div>
    )
  }
}

export default Search;