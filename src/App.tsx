import { Button, Typography, styled  } from "@mui/material";
import { LoadingButton } from '@mui/lab'
import AlbumIcon from '@mui/icons-material/Album';
import AddIcon from '@mui/icons-material/Add';

function App() {

  const RediestButton = styled(LoadingButton)({
    backgroundColor: "firebrick",
    color: "white",
    margin: 5,
  })

  return (
    <div className="App">
      <Button variant="text" onClick={()=>{alert('click mf')}}>text</Button>
      <Button variant="contained" disabled color="secondary">contained</Button>
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
      <Button variant="outlined" startIcon={<AddIcon/>} sx={{margin: 5}}>follow</Button>

    </div>
  );
}

export default App;
