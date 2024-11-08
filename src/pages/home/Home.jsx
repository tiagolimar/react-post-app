import Typography from '@mui/material/Typography';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import Table from '../../components/Table.jsx';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      setUsers(await response.json());
    }

    getUsers();
  }, [])

  return (
    <>
      <Navbar />
      <Typography variant="h1" component="h1" sx={{ textAlign: 'center', marginTop: "1em" }}>
        Home
      </Typography>
      {users.length > 0 && <Table data={users} />}
      <Footer />
    </>
  )
}
