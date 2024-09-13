import { sendMail } from "./mail.service.js";

export const enviarCorreo = async (req, res) => {
  const { pedido, fechaEntrega, total, nombre, formaPago } = req.body;  // Recibe los datos desde el body del POST

  try {
    // Envía el correo utilizando el servicio
    const info = await sendMail(pedido, fechaEntrega, total, nombre, formaPago);

    // Respuesta exitosa
    return res.status(200).json({
      message: 'Correo enviado exitosamente',
      info: info.messageId
    });
  } catch (error) {
    console.error(error);

    // Respuesta de error
    return res.status(500).json({
      message: 'Error al enviar el correo',
      error: error.message
    });
  }
};