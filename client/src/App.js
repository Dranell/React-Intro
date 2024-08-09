import "./App.css"
import image1 from "./photos/hotel-photo.jpg"





function App(){
  return(
    //jsx,html being rendered by javascript
    <>
    <h1>Welcome From Afar!</h1>
    <p>Our Sentence</p>
    <div class="div_image">
      <img src={image1} />
    </div>                      
    </>
    
  )
}

export default App;