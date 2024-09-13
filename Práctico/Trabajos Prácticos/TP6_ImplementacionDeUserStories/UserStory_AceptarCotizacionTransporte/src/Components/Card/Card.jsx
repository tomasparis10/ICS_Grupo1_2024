import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'; // Importa el archivo de estilos
import { useConfirmation } from '../../context/contextConfirmation';

const Card = ({ nroPedido, nombreChofer, fechaRetiro, fechaEntrega, precio, estrellas }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { confirmation } = useConfirmation();
    const [flagConfirmation, setFlagConfirmation] = useState(false);

    const handleOnClick = () => {

        if (confirmation) {
            // localStorage.setItem('confirmacion', JSON.stringify(confirmation)); 
            setFlagConfirmation(true);
            return;
        }

        setLoading(true);
        setTimeout(() => {
            navigate("/cotizacion", { state: { nroPedido, nombre: nombreChofer, fechaRetiro, fechaEntrega, precio } });
        }, 300); // Delay de 1 segundo para simular el proceso de carga
    };

    // Generar las estrellas dinámicamente
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= estrellas) {
                stars.push(<img key={i} src="/img/star-solid.svg" alt="Estrella llena" className="w-5 h-5 text-yellow-400" />);
            } else {
                stars.push(<img key={i} src="/img/star-solid-white.svg" alt="Estrella vacía" className="w-5 h-5 text-gray-400" />);
            }
        }
        return stars;
    };

    return (
        <div className="relative max-w-sm bg-[#0077B6] border border-gray-200 rounded-xl shadow p-5">
            <a href="#">
                <img className="rounded-t-xl" src="/img/hombre-conduciendo.jpg" alt="Conductor" />
            </a>
            <div className="p-5 text-white">

                {/* Estrellas */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex">{renderStars()}</div>
                </div>
                {/* Nombre del conductor */}
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold">{nombreChofer}</h5>
                </a>

                {/* Separador */}
                <hr className="border-gray-300 my-2" />

                {/* Fechas */}
                <div className="flex justify-between items-center mb-2">
                    <p className="font-normal">
                        Fecha de retiro: {fechaRetiro}<br />
                        Fecha de entrega: {fechaEntrega}
                    </p>
                </div>

                {/* Separador */}
                <hr className="border-gray-300 my-2" />

                {/* Precio y métodos de pago */}
                <div className="flex justify-between items-center mb-2">
                    <div className="text-xl font-bold text-white">
                        Precio: <span className="text-3xl">${precio}</span>
                    </div>
                    <div className="flex space-x-4">
                        <img src="/img/dinero.png" alt="Efectivo" className="w-8 h-8" />
                        <img src="/img/tarjeta-de-credito.png" alt="Crédito" className="w-8 h-8" />
                    </div>
                </div>

                {/* Botón Contratar */}
                <div className="flex justify-center">
                    <button
                        className="w-[80%] inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-[#03045E] rounded-lg hover:bg-[#003d7a] focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300"
                        onClick={handleOnClick}
                    >
                        CONTRATAR
                    </button>
                </div>
                {flagConfirmation && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg mt-2 text-center">Ya se acepto una cotización.</p>}
            </div>
            {loading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                </div>
            )}
        </div>
    );
}

export default Card;
