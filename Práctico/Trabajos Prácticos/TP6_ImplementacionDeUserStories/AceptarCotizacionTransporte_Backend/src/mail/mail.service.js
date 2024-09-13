import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'kellie.feil91@ethereal.email',
      pass: 'BHBJJXvjjDRbZDavYD'
  },
  tls: {
    rejectUnauthorized: false // Ignorar certificados autofirmados
  }
});

export const sendMail = async (pedido, fechaEntrega, total, nombre, formaPago) => {
  try {
    const info = await transporter.sendMail({
      from: `"TangoApp" <kellie.feil91@ethereal.email>`,
      to: 'neva59@ethereal.email',
      subject: `Confirmación de Cotización: #${pedido}`,
      // text: `Detalles de la cotización: ${pedido}, Fecha de Retiro: ${fechaRetiro}, Fecha de Entrega: ${fechaEntrega}, Total: ${total}`,
      html: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Confirmación de Pedido</title>
<style>
    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
        color: #333;
    }
    .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
        background-color: #007bff;
        color: #ffffff;
        padding: 20px;
        text-align: center;
    }
    .header h2 {
        margin: 0;
        font-size: 24px;
    }
    .content {
        padding: 20px;
        line-height: 1.6;
    }
    .content p {
        margin: 0 0 10px;
        color: #555555;
    }
    .content strong {
        color: #333333;
    }
    .button {
        display: inline-block;
        background-color: #007bff;
        color: #ffffff;
        text-decoration: none;
        padding: 12px 20px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        margin: 20px 0;
    }
    .footer {
        background-color: #f7f7f7;
        padding: 10px;
        text-align: center;
    }
    .footer p {
        margin: 0;
        color: #666666;
        font-size: 14px;
    }
</style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>¡Confirmación de Transporte!</h2>
        </div>
        <div class="content">
            <p>Estimado Transportista <strong>${nombre}</strong>,</p>
            <p>Nos complace informarle que su cotización número <strong>${pedido}</strong> ha sido confirmada correctamente.</p>
            <p>El medio de pago seleccionado es <strong>${formaPago}</strong>.</p>
            <p>El total a cobrar es de <strong>$${total}</strong>.</p>
            <p>La fecha de entrega es <strong>${fechaEntrega}</strong>.</p>
            <p>Para ver más detalles sobre el transporte, por favor haga clic en el botón de abajo.</p>
            <a href="" class="button">Ver Detalles del Transporte</a>
        </div>
        <div class="footer">
            <p>Gracias por elegirnos,</p>
            <p>Equipo de TangoApp.com</p>
        </div>
    </div>
</body>
</html>`
    });
    console.log('Correo enviado:', info);
    return info;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error(`Error al enviar el correo: ${error.message}`);
  }
}