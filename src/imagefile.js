// import React from 'react';
// import './App.css';

// class App extends React.Component{
//   state={
//     users:[
//      {image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"} ,
//      {image:"https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"} ,
//      {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWDkMQyC-uDV2HcK-qvzumNd6bqaQ9dOVgegt9fKKxx2KZKGa"} ,
//      {image:"https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"} ,
//      {image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"} ,

//     ],
//     imageInUse: ["https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"],
//     index: 0
//   }

//   handleClick = () =>{
//     let index = this.state.index;
//     if (index === 4)
//       index = 0
//     else
//       index++;

//     let tempArr = Object.assign([], this.state.imageInUse);
//     tempArr.push(this.state.users[index].image);
    
   
//     this.setState({
//       imageInUse: tempArr,
//       index: index
//     })
//   }
//   render(){
//     return(
       
//       <div className="App">
//         <button onClick={this.handleClick}>Add</button> 
//         <div className="flex-container">
//           {this.state.imageInUse.map((item, index)=>{
//             return <div key={index}><img src={item} width={200} height={200} mode='fit' alt='useimage' /></div>
//           })}
//         </div>
//       </div>
//       )
//   }
// }

