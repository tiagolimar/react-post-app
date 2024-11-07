import Typography from '@mui/material/Typography';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Typography variant="h1" component="h1" sx={{ textAlign: 'center', marginTop: "1em" }}>
        Home
      </Typography>
      <Footer />
    </>
  )
}
