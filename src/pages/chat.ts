import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return new Response(JSON.stringify({ error: 'Mensaje requerido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const getAIResponse = (text: string) => {
      const lowerMessage = text.toLowerCase();
      
      if (lowerMessage.includes('luz') || lowerMessage.includes('luces') || lowerMessage.includes('iluminación')) {
        if (lowerMessage.includes('encender') || lowerMessage.includes('prender')) {
          return 'He encendido las luces según tu solicitud.';
        } else if (lowerMessage.includes('apagar')) {
          return 'He apagado las luces según tu solicitud.';
        } else {
          return 'Para controlar las luces, di "enciende las luces" o "apaga las luces".';
        }
      }
      
      if (lowerMessage.includes('puerta') || lowerMessage.includes('puertas')) {
        if (lowerMessage.includes('abrir')) {
          return 'He abierto la puerta según tu solicitud.';
        } else if (lowerMessage.includes('cerrar')) {
          return 'He cerrado la puerta según tu solicitud.';
        } else {
          return 'Para controlar las puertas, di "abre la puerta" o "cierra la puerta".';
        }
      }
      
      if (lowerMessage.includes('temperatura')) {
        return 'La temperatura actual en tu hogar es de 22°C.';
      }
      
      if (lowerMessage.includes('hola') || lowerMessage.includes('hi')) {
        return '¡Hola! Soy tu asistente domótico. Puedo ayudarte a controlar las luces, puertas y climatización de tu hogar. ¿En qué puedo ayudarte?';
      }
      
      if (lowerMessage.includes('ayuda') || lowerMessage.includes('help')) {
        return 'Puedo ayudarte con: encender/apagar luces, abrir/cerrar puertas y consultar la temperatura actual.';
      }
      
      return 'No entiendo ese comando. Di "ayuda" para ver los comandos disponibles.';
    };
    
    const response = getAIResponse(message);
    
    return new Response(JSON.stringify({ reply: response }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error en /chat:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
