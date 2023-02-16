import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Oneblog({blogList}){
    let {blogid}= useParams();
    let theBlog = blogList.find(function(eachBlog){
        return eachBlog.id == blogid;
    })
    return(
        <Card sx={{ maxWidth: 370 }}>
        <CardMedia
          sx={{ height: 240 }}
          image={theBlog.blogPic}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {theBlog.blogTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {theBlog.blogText}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  
        // <div>
        //     <h1>{theBlog.blogTitle}</h1>
        //     <p>{theBlog.blogText}</p>
        //     <img src={theBlog.blogPic}/>
        // </div>
    )
}