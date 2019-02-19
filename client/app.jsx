import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: [],
      datasets: [{}]
    }
  }

  componentDidMount() {
    axios({
      method:'get',
      url:'https://api.coindesk.com/v1/bpi/historical/close.json?index=[USD/CNY]',
      responseType:'json'
    })
    .then(response => {
      this.setState({
        labels: Object.keys(response.data.bpi),
        datasets: [{
          label: "Price",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: Object.values(response.data.bpi),
        }]
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Bitcoin Price Index</h1>
        <p>(Last 30 Days)</p>
        <Line
          data={this.state}
        />
        <p className="credit">Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a></p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));