import {Link} from 'react-router-dom';

export default function Blogs({blogList}){
    const BlogList = blogList.map(function (blogObject){
        return(
            <ul key={blogObject.id}>
                <li><Link to={"/blogs/" + blogObject.id}>{blogObject.blogTitle}</Link></li>
            </ul>
        )
    })
    return(
        <div>{BlogList}</div>
    )
}