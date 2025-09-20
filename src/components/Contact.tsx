import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Zap, Clock, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_w24zmml',      // তোমার Service ID
        'template_3glsj9a',     // তোমার Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'xFtIaACChM3G0Wd3-'     // তোমার Public Key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section-new" id="contact">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        {/* Header */}
        <motion.div
          className="contact-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="contact-badge">
            <Zap size={16} />
            <span>Let's Connect</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="contact-title">
            Get In <span className="contact-title-highlight">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="contact-subtitle">
            Ready to bring your ideas to life? Let's start a conversation!
          </motion.p>
        </motion.div>

        <div className="contact-main">
          {/* Left - Contact Info */}
          <motion.div 
            className="contact-info-section"
            style={{ pointerEvents: 'auto' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="info-header">
              <h3>Let's Start a Conversation</h3>
              <p>I'm always excited to work on new projects and meet amazing people. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-methods">
              <motion.a
                href="mailto:developermamun1999@gmail.com"
                className="contact-method"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="method-icon"><Mail size={20} /></div>
                <div className="method-content">
                  <h4>Email</h4>
                  <p className="method-value">developermamun1999@gmail.com</p>
                  <span className="method-description">Drop me a line anytime</span>
                </div>
              </motion.a>
              <motion.a
                href="tel:+8801795920956"
                className="contact-method"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="method-icon"><Phone size={20} /></div>
                <div className="method-content">
                  <h4>Phone</h4>
                  <p className="method-value">+880 1795920956</p>
                  <span className="method-description">Available 9 AM - 6 PM GMT+6</span>
                </div>
              </motion.a>
              <div className="contact-method">
                <div className="method-icon"><MapPin size={20} /></div>
                <div className="method-content">
                  <h4>Location</h4>
                  <p className="method-value">Rangpur, Panchagarh</p>
                  <span className="method-description">Open to remote work</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <div className="contact-form-section" style={{ pointerEvents: 'auto', zIndex: 100, position: 'relative' }}>
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Fill out the form below and I'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-new">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe"
                    value={formData.name} onChange={handleInputChange} required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com"
                    value={formData.email} onChange={handleInputChange} required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Inquiry / Collaboration / General"
                  value={formData.subject} onChange={handleInputChange} required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Your message..."
                  value={formData.message} onChange={handleInputChange} required
                />
              </div>

              <motion.button type="submit" className="submit-btn" disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? <>Sending...</> : <>Send Message</>}
              </motion.button>
            </form>

            <div className="response-info">
              <div className="response-item"><Clock size={16} /><span>Typical response time: 2-4 hours</span></div>
              <div className="response-item"><CheckCircle size={16} /><span>Available for new projects</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
