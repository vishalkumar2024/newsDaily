import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import axios from 'react'
export default class News extends Component {

  // This is a constructor function for a class
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }


  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=news&apiKey=3493bef738ab4b10bdd4317aa0d39092";
    let rawData = await fetch(url);
    let data = await rawData.json();
    // console.log(data)
    // console.log(data.articles)
    this.setState({ articles: data.articles })
    // console.log(data.articles)
  }


  // async componentDidMount(){
  //     let fetchApi = await axios.get("https://picsum.photos/v2/list");
  //     // useData(fetchApi.data);
  //     console.log(fetchApi) 
  //   }
  handleNextBtn = async () => {
    let url = `https://newsapi.org/v2/everything?q=news&apiKey=3493bef738ab4b10bdd4317aa0d39092&page=${this.state.page + 1}`;
    let rawData = await fetch(url);
    let data = await rawData.json();
    this.setState({
      articles: data.articles,
      page: this.state.page + 1
    })
  }

  handlePreviousBtn = async () => {
    let url = `https://newsapi.org/v2/everything?q=news&apiKey=3493bef738ab4b10bdd4317aa0d39092&page=${this.state.page - 1}`;
    let rawData = await fetch(url);
    let data = await rawData.json();
    this.setState({
      articles: data.articles,
      page: this.state.page - 1
    })
  }

  render() {
    return (
      <div className='container my-3 '>
        <h1>News Daily - Top news</h1>
        <div className="row border">
          {this.state.articles.map((e) => {
            return <div className="col-md-4" key={e.url} >
              <NewsItem title={e.title ? e.title.slice(0, 45) : ''} description={e.description ? e.description.slice(0, 100) : "No Description available now"} imageUrl={e.urlToImage ? e.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFslb0pACuoj1Y8UYas6nmUIBGKYM24wo5-w&s"} newsUrl={e.url} />
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousBtn}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

