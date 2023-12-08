import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';

import{initilizeApp} from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyAbdxqhL8jJjQutI2MKnxf4USx1s6fujfI",
  authDomain: "login1-12f59.firebaseapp.com",
  projectId: "login1-12f59",
  storageBucket: "login1-12f59.appspot.com",
  messagingSenderId: "245791262800",
  appId: "1:245791262800:web:a8fbafdc79b1eea9ef6955",
  measurementId: "G-CVZ0S5JV31"
};
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() =>{
    if (!firebase.app.length){
      initilizeApp(firebaseConfig);
    }
  },[]);

  const handleLogin = async () => {
    try {
      const response =await firebase.auth().singInWithEmailAndPassword(email, password);
      alert('Bienvenido');
      console.log('Inicio de sesión exitoso: ',response.user);
    } catch (error) {
      alert('Usuario y/o contraseña invalidos');
      console.error('Error durante el inicio de sesión: ',error.message);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
