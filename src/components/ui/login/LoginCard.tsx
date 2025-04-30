import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // manejar el submit del formulario
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg sm:px-6 sm:mx-4">
      <h2 className="text-center text-2xl font-semibold mb-12">¡Te damos la bienvenida!</h2>
      <h3 className="text-left text-lg mb-6">Iniciar sesión</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
            className="w-full p-2 border rounded pr-10 focus:outline-none focus:border-cyan-500"/>
        </div>
  
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-semibold mb-2">
            Contraseña
          </label>
  
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="w-full p-2 border rounded pr-10 focus:outline-none focus:border-cyan-500"/>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer">
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </div>
  
        <button
          type="submit"
          className="w-64 bg-cyan-500 text-white py-2 rounded-full hover:bg-cyan-600 cursor-pointer mt-12 mx-auto block">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
  
export default LoginCard;