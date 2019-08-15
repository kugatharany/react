import React from 'react';
import './App.css';

class App extends React.Component{
constructor (){
  super()
  this.state={ 
   movie:["Avengers1","Avengers2","Avengers3","Avengers4"],
   counter :0
  }
}
  
  handleClick = () =>{
  let movielist= this.state.movie;
  movielist.forEach((el)=>{
  this.setState({movie:el})
});

   let counter =this.state.counter;
   counter =movielist[0];
   counter++;
   

  }
  
  render(){
    let movie = this.state.movie[0];
    return(
      <div className="App">
        
       <h1>Movie name: {movie}</h1>

        <button onClick={this.handleClick}>Upgrade</button>
         
      </div>
      )
  }
}

export default App;


// import React from 'react';
// import './App.css';

// class App extends React.Component{
// constructor (){
//   super()
//   this.state={
    
//   //  movie:["Avengers1","Avengers2","Avengers3","Avengers4"]
//  movie:"Avengers1"
//   }

// }
  
//   handleClick = () =>{
 
//  // let movie= this.state.movie;
//    //  movielist.map((el)=>{
//    //    {}
//    //  })
//    this.setState({movie:"Avengers22"})

//   }
  
//   render(){
//     let movie = this.state.movie;
//     return(
//       <div className="App">
        
//        <h1>Movie name: {movie}</h1>
//         <button onClick={this.handleClick}>Upgrade</button>
         
//       </div>
//       )
//   }
// }

// export default App;


