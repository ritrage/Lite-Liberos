import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BuyerLeaderboard() {
  const classes = useStyles();
//   const [checked, setChecked] = React.useState([1]);

//   const handleToggle = value => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//  };

  return (
    <List dense className={classes.root} style={{width: "200% ",margin :"0"}}>
      
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
              <AccountCircleIcon style = {{fontSize:"50px",color:"#d4af37"}} />
            </ListItemAvatar>
            <ListItemText ><Typography style = {{fontSize:"50px",color:"#d4af37"}}>Seller </Typography> </ListItemText>
            <img src={ require('./download.png') } style = {{height:"85px",width:"70px"}} />
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
              <AccountCircleIcon style = {{fontSize:"40px"}} />
            </ListItemAvatar>
            <ListItemText ><Typography style = {{fontSize:"40px"}}>Seller </Typography></ListItemText>
            <img src={ require('./download (1).jpg') } style = {{height:"70px",width:"70px"}} />
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
              <AccountCircleIcon style = {{fontSize:"30px",color:"#905923"}} />
            </ListItemAvatar>
            <ListItemText ><Typography style = {{fontSize:"30px",color:"#905923"}}>Seller </Typography></ListItemText>
            <img src={ require('./downloadb.png') } style = {{height:"65px",width:"70px"}} />
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
             
            <AccountCircleIcon  />
            </ListItemAvatar>
            <ListItemText >Seller</ListItemText>
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
              
            <AccountCircleIcon  />
            </ListItemAvatar>
            <ListItemText >Seller</ListItemText>
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
             
            <AccountCircleIcon  />
            </ListItemAvatar>
            <ListItemText >Seller</ListItemText>
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
            
            <AccountCircleIcon  />
            </ListItemAvatar>
            <ListItemText >Seller</ListItemText>
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
            
            <AccountCircleIcon  />
            </ListItemAvatar>
            <ListItemText >Seller</ListItemText>
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
             
            <AccountCircleIcon  />
            </ListItemAvatar>
            <ListItemText >Seller</ListItemText>
          </ListItem>
          <ListItem button style={{width: "200% ",margin :"0"}}>
            <ListItemAvatar>
             
            <AccountCircleIcon  />
            </ListItemAvatar>
            <ListItemText >Seller</ListItemText>
          </ListItem>
          
    </List>
  );
}