import './styles.css';

import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {
  constructor (props) {
    super(props);

    //this.handlePClick = this.handlePClick.bind(this); //fazendo o bind do this, o mesmo método tendo o this dentro dele

    this.state = { //Objeto que contém os dados desse componente
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2,
      searchValue: ''
    };
  }

  async componentDidMount () {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const photosAndPosts = await loadPosts();
    this.setState({
      posts: photosAndPosts.slice(page, postsPerPage),
      allPosts: photosAndPosts
    });
  }

  loadMorePosts = () => {
    console.log('Load More Posts Chamado.');
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});

    console.log(page, postsPerPage, nextPage, nextPage + postsPerPage);
  }

  //timeoutSecureCache = null; //Fazendo isso para lidar com o cache/lixo que pode ficar no update

  // handleTimeout = () => {
  //   const { posts, counter } = this.state;
  //   posts[0].title = 'O título mudou';

  //   this.timeoutSecureCache = setTimeout(() => {
  //     this.setState({ posts, counter: counter + 1 })
  //   }, 3000)
  // }

  handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    this.setState({ searchValue : value });
  }

  render() {

    const { posts, page, postsPerPage, allPosts, searchValue } = this.state; //destructuring
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) 
    : 
    posts;

    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && (
            <>
            <h1>Search Value: {searchValue}</h1><br /><br /><br />
            </>
          )}
          
          <TextInput searchValue={searchValue} handleChange={this.handleChange}></TextInput>
          <br /><br /><br />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}></Posts>
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts :(</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button 
              text='Load More Posts'
              onClick={this.loadMorePosts}
              disabled={noMorePosts}>
            </Button>
          )}
          
        </div>
      </section>
    ); 
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
