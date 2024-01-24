import crypto from 'crypto';

export const HmacUltils = () => {
  const generateHmacSignature = (method: string, content: string, requestUri: string, contentType?: string) => {
    const stringToSign = method + content + contentType + requestUri;
    return crypto.createHmac('SHA256', 'Gudden_SECRET').update(Buffer.from(stringToSign)).digest('base64');
  };

  return { generateHmacSignature };
};
