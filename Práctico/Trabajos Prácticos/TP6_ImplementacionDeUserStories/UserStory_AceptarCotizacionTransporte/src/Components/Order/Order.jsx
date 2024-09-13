import React, { useState } from 'react';
import PersonalData from './PersonalData';
import PaymentMethods from './PaymentMethods';
import { useNavigate, useLocation } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [personalData, setPersonalData] = useState({
    titular: '',
    tipoDoc: '',
    nroDoc: '',
    nroTarjeta: '',
    vencimiento: '',
    codSeg: '',
  });
  const { nroPedido, nombre, fechaRetiro, fechaEntrega, precio } = location.state || {}

  const dataPedido = {
    nroPedido,
    nombre,
    fechaEntrega,
    fechaRetiro,
    precio,
  }

  const handleCancel = () => {
    navigate("/");
  }

  return (
    <div className='p-5 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold text-gray-800 text-center'>Cotización #{nroPedido}</h2>
      <PaymentMethods setPaymentMethod={setPaymentMethod} isDisabled={isDisabled} setIsDisabled={setIsDisabled} handleCancel={handleCancel} dataPedido={dataPedido} />

      {(paymentMethod === 'Debito/Credito' && isDisabled) && <PersonalData data={personalData} setData={setPersonalData} setIsDisabled={setIsDisabled} handleCancel={handleCancel} dataPedido={dataPedido} />}
    </div>
  );
}

export default Order;