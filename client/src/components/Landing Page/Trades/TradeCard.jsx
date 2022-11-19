import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

export default function MediaCard() {
  var props = [{
    itemName: "Lawnmower",
    itemImage: "http://mobileimages.lowes.com/productimages/aa4f51ce-2442-4dd0-a066-56f556421e54/11470444.jpg",
    availableDate: "10/17",
    username: "Nickamenda",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  },{
    itemName: "Test",
    itemImage: "https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    availableDate: "10/19",
    username: "Nickamenda",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  },{
    itemName: "NElkjasd",
    itemImage: "https://plus.unsplash.com/premium_photo-1668565018890-dffd545bfc83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    availableDate: "11/17",
    username: "adsfasd",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  },{
    itemName: "lksdafjlj",
    itemImage: "https://images.unsplash.com/photo-1667747755652-0716ae70c386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    availableDate: "12/1",
    username: "asdfadsfwerw",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  },{
    itemName: "Food",
    itemImage: "https://plus.unsplash.com/premium_photo-1668447218150-75b85aa026e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    availableDate: "10/12",
    username: "FoodMan",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  },{
    itemName: "Good Food",
    itemImage: "https://images.unsplash.com/photo-1668087530856-555ea3a61b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    availableDate: "1/17",
    username: "FoodMan",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  },{
    itemName: "Free Business",
    itemImage: "https://images.unsplash.com/photo-1652593471606-45e7cf3bcd1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    availableDate: "8/20",
    username: "Nickamenda",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  },{
    itemName: "PC",
    itemImage: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    availableDate: "10/17",
    username: "Nickamenda",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  },{
    itemName: "Hack",
    itemImage: "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SGFjayUyMFJlYWN0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    availableDate: "10/17",
    username: "Hacker",
    avatar: "https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg="
  }
]
  return (
    <>
    {props.map((item, i) => {
      return (
        <Card sx={{ width: 280 }} key={i}>
        <CardMedia
          component="img"
          height="140"
          image = {item.itemImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.itemName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This {item.itemName} will be available {item.availableDate}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{pt: '5px'}}>
            {item.username}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => {
            // Get info about item and user to send to db to query
            console.log(item.itemName, item.username)
          }}>Message</Button>
          <Button size="small" onClick={(e) => {
            // Get info about item to send to db to query
            console.log(item.itemName)
          }}>Learn More</Button>
          <Container className="avatar" sx={{width: '0 !important'}} onClick={(e) => {
            //info about user
            console.log(item.username)
          }}>
          <Avatar alt="Remy Sharp" src={item.avatar} />
          </Container>
        </CardActions>
      </Card>

      )
    })}

    </>
  );
}