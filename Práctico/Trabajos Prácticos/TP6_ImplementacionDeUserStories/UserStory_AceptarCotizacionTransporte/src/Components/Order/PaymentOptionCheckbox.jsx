import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PaymentOptionCheckbox = ({ setPaymentMethod, handleCancel, setIsDisabled, dataPedido }) => {
  const [tempPaymentMethod, setTempPaymentMethod] = useState('');
  const [paymentMethodError, setPaymentMethodError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setTempPaymentMethod(e.target.value);

  const handleBack = () => setIsDisabled(false);

  const handleConfirm = (e) => {
    e.preventDefault();
    if (tempPaymentMethod) {
      setPaymentMethod(tempPaymentMethod);
      setIsDisabled(true);
      setPaymentMethodError('');
      navigate("/detalle", { state: { pedido: dataPedido.nroPedido, nombre: dataPedido.nombre, fechaRetiro: dataPedido.fechaRetiro, fechaEntrega: dataPedido.fechaEntrega, total: dataPedido.precio, formaPago: tempPaymentMethod } });
    } else {
      setPaymentMethodError('Se debe seleccionar una forma de pago.')
    }
  };

  return (
    <div className="bg-[#0077B6] p-6 rounded-xl shadow-md mt-2">
      <h3 className="text-lg font-semibold mb-4 text-white">Opción de contado</h3>
      <form className="space-y-4" onSubmit={handleConfirm}>
        <div className="flex items-center">
          <input
            id="contado-retirar"
            type="radio"
            value="Contado al Retirar"
            checked={tempPaymentMethod === 'Contado al Retirar'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="contado-retirar" className="text-white">Contado al Retirar</label>
        </div>
        <div className="flex items-center">
          <input
            id="contado-entrega"
            type="radio"
            value="Contado contra Entrega"
            checked={tempPaymentMethod === 'Contado contra Entrega'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="contado-entrega" className="text-white">Contado contra Entrega</label>
        </div>
        {paymentMethodError && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg">
          {paymentMethodError}
        </p>}
        <div className="flex space-x-2 mt-4 justify-center">
          <button
            type="button"
            className="bg-[#90E0EF] text-white px-4 py-2 rounded-lg hover:bg-[#CAF0F8] hover:outline hover:outline-2 hover:outline-black transition-colors duration-300"
            onClick={handleBack}
          >
            <p className="text-black font-bold">Atrás</p>

          </button>
          <button
            type="button"
            className="bg-[#ff2828] text-white px-4 py-2 rounded-lg hover:bg-[#f84f4f] hover:outline hover:outline-2 hover:outline-white transition-colors duration-300 font-bold"
            onClick={handleCancel}>
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-[#00025f] text-white px-4 py-2 rounded-lg hover:bg-[#040799c5] hover:outline hover:outline-2 hover:outline-white transition-colors duration-300"
          >
            <p className='font-bold'>Confirmar</p>
          </button>
        </div>
      </form>
      {/* <p>Opción seleccionada: {selectedOption}</p> */}
    </div>
  );
}

export default PaymentOptionCheckbox