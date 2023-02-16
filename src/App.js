import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';
import Routerthings from './Components/Routerthings';
import cat from './Images/cat.webp';
import spider from './Images/Blondie3.jpg';
import snake from './Images/snake.jpeg';
import salamander from './Images/spotted_salamander.jpg.webp'

export default function App(){
    const theBlogs = [
        {id:1, blogPic:spider, blogTitle: "Blond Tarantula", blogText: "The Arizona blond tarantula is typically found in saguaro-dominated plant communities. There are many similar species throughout the desert southwest, but they are difficult to differentiate."},
        {id:2, blogPic:salamander, blogTitle: "Salamander", blogText: "salamander, (order Caudata), any member of a group of about 740 species of amphibians that have tails and that constitute the order Caudata. The order comprises 10 families, among which are newts and salamanders proper (family Salamandridae) as well as hellbenders, mud puppies, and lungless salamanders. They most commonly occur in freshwater and damp woodlands, principally in temperate regions of the Northern Hemisphere."},
        {id:3, blogPic:snake, blogTitle: "Dracaena trifasciata", blogText: "Dracaena trifasciata, commonly known as the snake plant, is one of the most popular and hardy species of houseplants. Up until 2017, it was botanically classified as Sansevieria trifasciata, but its commonalities with Dracaena species were too many to overlook. The plant features stiff, sword-like leaves and can range anywhere from six inches to eight feet tall. Snake plants can vary in color although many have green-banded leaves and commonly feature a yellow border. These plants are easy to grow and, in many cases, are nearly indestructible. They will thrive in very bright light or almost dark corners of the house. Snake plants generally grow slowly in indoor light, but increasing its exposure to light will boost growth if it receives a few hours of direct sun. Planting and repotting is best done in the spring."},
        {id:4, blogPic:cat, blogTitle: "Cat Primordial Pouch", blogText: "Cats are born with this sagging belly, and all cats, both male and female, have primordial pouches. Some pouches are more prominent than others. Even non-domestic big cats have them! The pouch is an abdominal flap along their belly made up of extra loose skin and some fatty tissue."}
    ]
    return(
        <div>
            <Router>
                <Header/>
                <Routerthings blogList={theBlogs}/>
            </Router>
        </div>
    )
}