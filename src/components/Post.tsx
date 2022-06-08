import {FC} from 'react'
import { CardStack } from '../theme';
import {Typography, CardContent , IconButton, CardActions, CardHeader, Avatar, CardMedia} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


export const Post:FC = () => {
    return (
        <CardStack >
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Boats"
                subheader="March 03, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://t3.ftcdn.net/jpg/03/47/44/74/360_F_347447443_JOnlCagzZmgKtSlMgIUMHdVq2w8mkB7t.jpg"
                alt="boats"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Same as the cars but with floating cars
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </CardStack>
    )
}
