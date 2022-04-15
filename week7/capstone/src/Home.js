import './App.css';
import Nav from '../src/Nav.js'
import axios from 'axios';
function Home() {
    return(
<div>
    <Nav/>
    <p>Welcome to my home page</p>
    <button onClick={
        function end(){
            console.log("button clicked")
            axios.get('/people').then(response => {
                for(let i = 0; i < response.data.legnth; i++){
                    const h1 = document.createElement('h1')
                    h1.textContent = response.data[i].name
                    document.body.appendChild(h1)
                }
});         
}}>home</button>
);</div>
    )
}
export default Home;