import React from 'react';
import Card from './Card/Card';

const Home = () => {
    // Datos de los transportistas
    const transportistas = [
        {
            nroPedido: '1',
            nombreChofer: 'Julian Alvarez',
            fechaRetiro: '25/09/2024',
            fechaEntrega: '30/09/2024',
            precio: 500,
            estrellas: 4
        },
        {
            nroPedido: '2',
            nombreChofer: 'Lionel Messi',
            fechaRetiro: '01/10/2024',
            fechaEntrega: '05/10/2024',
            precio: 750,
            estrellas: 5
        },
        {
            nroPedido: '3',
            nombreChofer: 'Carlos Tevez',
            fechaRetiro: '15/09/2024',
            fechaEntrega: '20/09/2024',
            precio: 400,
            estrellas: 3
        },
        {
            nroPedido: '4',
            nombreChofer: 'Angel Di Maria',
            fechaRetiro: '10/10/2024',
            fechaEntrega: '15/10/2024',
            precio: 600,
            estrellas: 4
        },
        {
            nroPedido: '5',
            nombreChofer: 'Paulo Dybala',
            fechaRetiro: '20/10/2024',
            fechaEntrega: '25/10/2024',
            precio: 550,
            estrellas: 4
        },
        {
            nroPedido: '6',
            nombreChofer: 'Sergio Aguero',
            fechaRetiro: '30/09/2024',
            fechaEntrega: '05/10/2024',
            precio: 800,
            estrellas: 5
        },
        {
            nroPedido: '7',
            nombreChofer: 'Rodrigo De Paul',
            fechaRetiro: '08/10/2024',
            fechaEntrega: '12/10/2024',
            precio: 650,
            estrellas: 4
        },
        {
            nroPedido: '8',
            nombreChofer: 'Emiliano Martinez',
            fechaRetiro: '18/09/2024',
            fechaEntrega: '23/09/2024',
            precio: 700,
            estrellas: 5
        },
    ];
    
    return (
        <div className="min-h-screen"> {/* Fondo de la página */}
            {/* Sección de cotizaciones */}
            <div className="p-5 lg:px-20"> {/* Aumentar padding en pantallas grandes */}
                <h2 className="text-2xl font-bold text-center mb-4 text-black">
                    Cotizaciones Disponibles
                </h2>

                {/* Contenedor de tarjetas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {transportistas.map((transportista, index) => (
                        <Card
                            key={index}
                            nroPedido={transportista.nroPedido}
                            nombreChofer={transportista.nombreChofer}
                            fechaRetiro={transportista.fechaRetiro}
                            fechaEntrega={transportista.fechaEntrega}
                            precio={transportista.precio}
                            estrellas={transportista.estrellas}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
