import logo from './logo.svg';
import './App.css';
import Books from './component/Books';
let booklist = [
  {
    img:"https://images.unsplash.com/photo-1555696958-c5049b866f6f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dG8ta2lsbC1hLW1vY2tpbmdiaXJkfHx8fHx8MTY4MjQyODgxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.27
  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 4.18,
    img: "https://www.bookgeeks.in/wp-content/uploads/2021/07/1984-by-George-Orwell-1.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.28,
    img: "https://images.squarespace-cdn.com/content/v1/5951afaf9de4bb54f00ad49a/1554695486726-OYU3SQZV74IDGN5EQA7I/Jane+for+website.jpg?format=1000w"
  },

  
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 3.91,
    img: "https://images.unsplash.com/photo-1633967333322-d4d617f49899?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGhlLWdyZWF0LWdhdHNieXx8fHx8fDE2ODI0MzE0OTQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    rating: 4.07,
    img: "https://images.unsplash.com/photo-1655939802008-67ea6c389b30?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8b25lLWh1bmRyZWQteWVhcnMtb2Ytc29saXR1ZGV8fHx8fHwxNjgyNDMxNzE5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
  },

  {
    title: "Wings of fire",
    author: "Dr.A.P.J.Abdul kalam",
    rating: 4.9,
    img: "https://cdnb.artstation.com/p/assets/images/images/020/366/189/large/jeeva-artist-09isro.jpg?1567513033"
  },
 
]

function App() {
  return (
   
    <div className='card-Book'>
  
      {
        booklist.map((book)=>{
          return <Books title={book.title} author={book.author} img={book.img} rating={book.rating}/>
        }
        )
      }
      
    </div>

  )
}
  
    
          
      
export default App;
