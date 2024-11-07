import Navbar from '../../components/Navbar.jsx';
import Typography from '@mui/material/Typography';

export const Post = () => {
  return (
    <>
    <Navbar />
    <Typography variant="h1" component="h1" sx={{ textAlign: 'center', marginTop: "1em" }}>
        Post
      </Typography>
    </>
  )
}
