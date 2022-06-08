import { Button, Typography, styled  } from "@mui/material";
import { LoadingButton } from '@mui/lab'
import AlbumIcon from '@mui/icons-material/Album';
import AddIcon from '@mui/icons-material/Add';
import {theme} from './theme'

function App() {

  const RediestButton = styled(LoadingButton)(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    margin: 5,
  }))

  return (
    <div className="App">
      <Button variant="text" onClick={()=>{alert('click mf')}}>text</Button>
      <Button variant="contained"  color="secondary">contained</Button>
      <Button variant="outlined"  endIcon={<AlbumIcon/>}>outlined</Button>
      <LoadingButton
          loading
          variant="outlined"
        >
          disabled
        </LoadingButton>

      <Typography variant='h1'>
        no way
      </Typography>
      <Button variant="contained" sx={{
        backgroundColor:"skyblue",
        color: "white",
      }}>
        Started
      </Button>
      <RediestButton loading> cool </RediestButton>
      <Button color="secondary" variant="outlined" startIcon={<AddIcon/>} sx={{margin: 5}}>follow</Button>

    </div>
  );
}

export default App;
