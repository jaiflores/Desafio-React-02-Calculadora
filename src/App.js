import React, { Component } from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
`
export const Calculadora = styled.div`
  background-color: purple;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;


  input{
    width: 40%;
    padding: 0.8rem;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  div{
    width: 100%;
    display: flex;
    justify-content: space-around; 
  }
  button{
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 30px;
    cursor:pointer;
   
  
  }
  h2{
    width: 40%;
    height: 50px;
    background-color: white;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

  }
`

export default class App extends Component{
  state = {
    n1:'',
    n2:'',
    resultado:''
  }
  
  soma = () => {
    this.setState({
      resultado: this.state.n1 + this.state.n2
    })
  }
  //BUSCANDO VALOR DO INPUT
  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    })
  }
  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    })
  }

  subtracao = () => {
    this.setState({
      resultado: this.state.n1 - this.state.n2
    })
  }
  // Coloquei para limitar o resuldo no final, para não sair do 
  //quadrado de resultado
  multiplicacao = () => {
    this.setState({
      resultado: (this.state.n1 * this.state.n2).toPrecision(5)
    })
  }
  divisao = () => {
    this.setState({
      resultado: (this.state.n1 / this.state.n2).toPrecision(8)
    })
  }
  limpar = () => {
    this.setState({
      resultado: ''
    })
  }

  render(){
    return(
      <Calculadora>
        <Title>Calculadora</Title>
        <input type="number" onChange={this.handleChange1} />
        <input type="number" onChange={this.handleChange2} />
        <div>
          <button onClick={this.soma}>+</button>
          <button onClick={this.subtracao}>-</button>
          <button onClick={this.multiplicacao}>*</button>
          <button onClick={this.divisao}>/</button>
          <button onClick={this.limpar}>c</button>
        </div>
        <h2>{this.state.resultado}</h2>
      </Calculadora>


    )

  }

}