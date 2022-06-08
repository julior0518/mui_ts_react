import {FC} from 'react'
import { Post } from './a_index';
import { CardStack } from '../theme'

import {Typography, Box, IconButton, CardActions, CardHeader, Avatar, CardMedia, CardContent} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

interface IState {

}

export const Feed: FC = () => {
    return (
        <Box bgcolor="#A3CEF180" flex={4}  p={2} sx={{overflow:"auto", } }>
            <CardStack sx={{margin:"10px 0"}} >
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
                    title="Cars"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2hvdy1jYXJzLXdvcmsuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0="
                    alt="cars"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        You know jsut some cars, next to other cars, parked in a lot for parking cars. The usual car stuff and things
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
            <Post />
        </Box>
    )
}
