import {Routes, Route} from 'react-router-dom';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Oneblog from '../Pages/Oneblog';

export default function Routerthings({blogList}){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blogs" element={<Blogs blogList={blogList}/>}/>
            <Route path="/blogs/:blogid" element={<Oneblog blogList={blogList}/>}/>
        </Routes>
    )
}