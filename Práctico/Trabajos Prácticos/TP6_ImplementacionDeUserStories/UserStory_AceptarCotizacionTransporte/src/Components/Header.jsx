import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-[#03045E] p-4 flex justify-between items-center">
            {/* Barra superior */}
            <span className="text-white text-xl font-bold">Mi Aplicación</span>
            {/* Contenedor del logo con borde circular */}
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                <img 
                    src="/img/camion.png" 
                    alt="Camión" 
                    className="w-8 h-8 rounded-full" 
                />
            </div>
        </div>
    );
}

export default Header;
