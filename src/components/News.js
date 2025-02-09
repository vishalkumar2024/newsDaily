import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  }

  // This is a constructor function for a class
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
    document.title = `${this.props.category}-NewsDaily`;
  }


  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=3493bef738ab4b10bdd4317aa0d39092`;
    this.props.setProgress(30)
    this.setState({ loading: true });
    this.props.setProgress(50)
    let rawData = await fetch(url);
    let data = await rawData.json();
    console.log(data)
    // console.log(data.articles)
    this.setState({
      articles: data.articles,
      loading: false
    })
    // console.log(data.articles)
    this.props.setProgress(100)
  }


  // async componentDidMount(){
  //     let fetchApi = await axios.get("https://picsum.photos/v2/list");
  //     // useData(fetchApi.data);
  //     console.log(fetchApi) 
  //   }
  handleNextBtn = async () => {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=3493bef738ab4b10bdd4317aa0d39092&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let rawData = await fetch(url);
    let data = await rawData.json();
    this.setState({
      articles: data.articles,
      page: this.state.page + 1,
      loading: false
    })
  }

  handlePreviousBtn = async () => {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=3493bef738ab4b10bdd4317aa0d39092&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let rawData = await fetch(url);
    let data = await rawData.json();
    this.setState({
      articles: data.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  Loading
  render() {
    return (
      <div className='container my-3 '>
        <h1 className='text-center' style={{ margin: '60px auto 30px auto ' }}>News Daily - {this.props.category}</h1>
        {this.state.loading && <Loading />}
        <div className="row border">
          {!this.state.loading && this.state.articles.map((e) => {
            return <div className="col-md-4" key={e.url} >
              <NewsItem title={e.title ? e.title.slice(0, 45) : ''} description={e.description ? e.description.slice(0, 100) : "No Description available now"} imageUrl={e.urlToImage ? e.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFslb0pACuoj1Y8UYas6nmUIBGKYM24wo5-w&s"} newsUrl={e.url} author={e.author ? e.author : 'unknown'} date={e.publishedAt} />
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between" style={{ marginTop: '20px' }}>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousBtn}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

