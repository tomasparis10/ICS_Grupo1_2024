export const sendEmail = async (emailData) => {
  try {
    const response = await fetch('http://localhost:5000/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData), // Envía los datos del correo en el cuerpo de la solicitud
    });

    if (response.status === 200) {
      console.log('Correo enviado correctamente');
      return { success: true, message: response.message };
    } else {
      console.log('Hubo un problema al enviar el correo');
      return { success: false, message: response.message };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: error.message };
  }
};