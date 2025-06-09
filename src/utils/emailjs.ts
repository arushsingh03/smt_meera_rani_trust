import emailjs from "@emailjs/browser";

interface EmailParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  to_name?: string;
}

interface EmailResponse {
  success: boolean;
  data?: unknown;
  error?: Error;
}

interface VolunteerParams extends Record<string, unknown> {
  name: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  skills: string;
  availability: string;
  interests: string;
  message?: string;
}

// Initialize emailjs
emailjs.init("R36QKQKQpejE4p3tU");

export const sendEmail = async (params: EmailParams): Promise<EmailResponse> => {
  try {
    const response = await emailjs.send(
      "service_f725zuk",
      "template_54bvicn",
      params,
      "R36QKQKQpejE4p3tU"
    );
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error as Error };
  }
};

export const sendContactEmail = async (params: EmailParams): Promise<EmailResponse> => {
  try {
    const response = await emailjs.send(
      "service_f725zuk",
      "template_54bvicn",
      params,
      "R36QKQKQpejE4p3tU"
    );
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error as Error };
  }
};

// Volunteer form template
export const sendVolunteerEmail = async (templateParams: VolunteerParams): Promise<EmailResponse> => {
  try {
    const response = await emailjs.send(
      "service_f725zuk", 
      "template_n95w24c", 
      templateParams,
      "R36QKQKQpejE4p3tU"
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error: error as Error };
  }
}; 