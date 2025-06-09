import emailjs from '@emailjs/browser';

emailjs.init("R36QKQKQpejE4p3tU"); 

// Contact form template
export const sendContactEmail = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      "service_f725zuk", 
      "template_54bvicn", 
      templateParams
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};

// Volunteer form template
export const sendVolunteerEmail = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      "service_f725zuk", 
      "template_n95w24c", 
      templateParams
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
}; 