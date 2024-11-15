import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

export const Login = () => {
	const [usuario, setUsuario] = useState('');
	const [senha, setSenha] = useState('');
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  if (senha === 'admin') {
        localStorage.setItem('user', usuario);
		location.href = '/home';
	  }
	};

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 300,
                    margin: "0 auto",
                    mt: 5,
					border: '1px solid #ccc',
					padding: '1rem',
					borderRadius: '5px',
                }}
            >
				<Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
					Login
				</Typography>
                <TextField
                    label="Usuário"
                    variant="outlined"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    margin="normal"
                    required
                />
                <TextField
                    label="Senha"
                    variant="outlined"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    margin="normal"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Entrar
                </Button>
            </Box>
        </>
    );
};
