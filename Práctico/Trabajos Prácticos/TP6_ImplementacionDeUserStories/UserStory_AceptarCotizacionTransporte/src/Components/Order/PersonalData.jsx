import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalData = ({ data, setData, setIsDisabled, handleCancel, dataPedido }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const formatExpiryDate = (value) => {
    // Elimina cualquier carácter no numérico
    const cleaned = value.replace(/\D+/g, '');
    // Formatea la fecha de vencimiento en formato MM/AA
    return cleaned.slice(0, 2) + (cleaned.length > 2 ? '/' + cleaned.slice(2, 4) : '');
  };

  const handleExpiryDateChange = (e) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setData({
      ...data,
      [e.target.name]: formattedValue
    });
  };

  const formatCodSeg = (value) => value.slice(0, 3);

  const handleCodSeg = (e) => {
    const formattedValue = formatCodSeg(e.target.value);
    setData({
      ...data,
      [e.target.name]: formattedValue
    });
  }

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D+/g, '');
    return cleaned.slice(0, 16).match(/.{1,4}/g)?.join('-') || '';
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setData({
      ...data,
      [e.target.name]: formattedValue
    });
  };

  const handleBack = () => {
    setIsDisabled(false);
  }

  const handleConfirm = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate("/detalle", { state: { pedido: dataPedido.nroPedido, nombre: dataPedido.nombre, fechaRetiro: dataPedido.fechaRetiro, fechaEntrega: dataPedido.fechaEntrega, total: dataPedido.precio, formaPago: 'Debito/Credito', tarjeta: data.nroTarjeta } });
    }
  }

  const validateForm = () => {
    const errors = {};

    // Validar titular (solo texto y requerido)
    if (!data.titular) {
      errors.titular = 'El titular es requerido.';
    } else if (!/^[a-zA-Z\s]+$/.test(data.titular)) {
      errors.titular = 'El titular solo debe contener letras.';
    }

    // Validar tipo de documento
    if (!data.tipoDoc) {
      errors.tipoDoc = 'El tipo de documento es requerido.';
    }

    // Validar número de documento (solo números y requerido)
    if (!data.nroDoc) {
      errors.nroDoc = 'El número de documento es requerido.';
    } else if (!/^\d+$/.test(data.nroDoc)) {
      errors.nroDoc = 'El número de documento solo debe contener números.';
    }

    // Validar número de tarjeta (solo números y longitud de 16 dígitos)
    const cleanCardNumber = data.nroTarjeta.replace(/-/g, '');
    if (!data.nroTarjeta) {
      errors.nroTarjeta = 'El número de tarjeta es requerido.';
    } else if (!/^\d{16}$/.test(cleanCardNumber)) {
      errors.nroTarjeta = 'El número de tarjeta debe tener 16 dígitos.';
    }

    // Validar fecha de vencimiento (formato MM/AA)
    if (!data.vencimiento) {
      errors.vencimiento = 'La fecha de vencimiento es requerida.';
    } else if (!/^\d{2}\/\d{2}$/.test(data.vencimiento)) {
      errors.vencimiento = 'La fecha de vencimiento debe estar en formato MM/AA.';
    } else {
      // Verifica que la fecha de vencimiento sea válida y no esté vencida
      const [month, year] = data.vencimiento.split('/').map(Number);
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Los meses son de 0 a 11, por eso sumamos 1
      const currentYear = currentDate.getFullYear() % 100; // Tomar solo los últimos 2 dígitos del año

      if (month < 1 || month > 12) {
        errors.vencimiento = 'El mes de la fecha de vencimiento debe estar entre 01 y 12.';
      } else if (year < currentYear || (year === currentYear && month < currentMonth)) {
        errors.vencimiento = 'El año de la fecha de vencimiento debe estar en un rango válido.';
      }
    }

    // Validar código de seguridad (3 dígitos)
    if (!data.codSeg) {
      errors.codSeg = 'El código de seguridad es requerido.';
    } else if (!/^\d{3}$/.test(data.codSeg)) {
      errors.codSeg = 'El código de seguridad debe tener 3 dígitos.';
    }

    return errors;
  };

  return (
    <div className="bg-[#0077B6] p-6 rounded-xl shadow-md mt-2">
      <h2 className="text-lg font-semibold mb-4 text-white">Datos Personales</h2>
      <form className="space-y-4" onSubmit={handleConfirm}>
        <div>
          <input
            name="titular"
            value={data.titular}
            onChange={handleChange}
            placeholder="Titular"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {errors.titular && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg mt-2">
            {errors.titular}
          </p>}
        </div>

        <div>
          <select
            name="tipoDoc"
            value={data.tipoDoc}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="" disabled>Selecciona el tipo de documento</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Cédula">Cédula de identidad</option>
          </select>
          {errors.tipoDoc && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg mt-2">
            {errors.tipoDoc}
          </p>}
        </div>

        <div>
          <input
            name="nroDoc"
            value={data.nroDoc}
            onChange={handleChange}
            placeholder="Nro de documento"
            type='number'
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {errors.nroDoc && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg mt-2">
            {errors.nroDoc}
          </p>}
        </div>

        <div>
          <input
            name="nroTarjeta"
            value={data.nroTarjeta}
            onChange={handleCardNumberChange}
            type='text'
            placeholder="Nro de tarjeta"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {errors.nroTarjeta && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg mt-2">
            {errors.nroTarjeta}
          </p>}
        </div>

        <div>
          <input
            name="vencimiento"
            value={data.vencimiento}
            onChange={handleExpiryDateChange}
            placeholder="Fecha de expiración (MM/AA)"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {errors.vencimiento && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg mt-2">
            {errors.vencimiento}
          </p>}
        </div>

        <div>
          <input
            name="codSeg"
            value={data.codSeg}
            onChange={handleCodSeg}
            type='number'
            placeholder="Código de seguridad"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {errors.codSeg && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg mt-2">
            {errors.codSeg}
          </p>}
        </div>

        <div className="flex space-x-2 mt-4 justify-center">
          <button
            type="button"
            className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#45a049] transition-colors duration-300"
            onClick={handleBack}
          >
            Atras
          </button>
          <button
            type="submit"
            className="bg-[#03045E] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3] transition-colors duration-300"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
