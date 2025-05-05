import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, HelpCircle, AlertCircle, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // 95% chance of success for demo purposes
      if (Math.random() > 0.05) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  const faqs = [
    {
      question: 'O que é a LGPD?',
      answer: 'A Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018, é a legislação brasileira que regula as atividades de tratamento de dados pessoais. Ela se fundamenta em diversos valores, como o respeito à privacidade, à autodeterminação informativa, à liberdade de expressão e aos direitos humanos.'
    },
    {
      question: 'Quais são os direitos dos titulares de dados?',
      answer: 'Os titulares de dados têm diversos direitos, como: confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou inexatos, anonimização/bloqueio/eliminação de dados, portabilidade dos dados, revogação do consentimento, entre outros.'
    },
    {
      question: 'Quem precisa se adequar à LGPD?',
      answer: 'A LGPD se aplica a qualquer pessoa natural ou jurídica, de direito público ou privado, que realize tratamento de dados pessoais, independentemente do meio ou país onde esteja localizada, desde que os dados sejam coletados em território nacional, o tratamento tenha por objetivo ofertar bens ou serviços no Brasil, ou os dados sejam de indivíduos localizados no Brasil.'
    },
    {
      question: 'O que são dados pessoais sensíveis?',
      answer: 'Dados pessoais sensíveis são informações sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dados referentes à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.'
    },
    {
      question: 'Quais as penalidades para quem descumprir a LGPD?',
      answer: 'As penalidades incluem: advertência, multa simples de até 2% do faturamento (limitada a R$ 50 milhões por infração), multa diária, publicização da infração, bloqueio dos dados pessoais, eliminação dos dados pessoais e suspensão parcial ou total do funcionamento do banco de dados.'
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contato</h1>
          <p className="text-xl max-w-3xl">
            Entre em contato conosco para esclarecer dúvidas sobre a LGPD ou solicitar apoio para implementação da lei em sua organização.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-brand-green-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-brand-green-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-brand-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">E-mail</h3>
              <p className="text-neutral-600 mb-4">
                Envie suas dúvidas ou solicitações para nosso e-mail de contato.
              </p>
              <a 
                href="mailto:lgpd@ms.gov.br" 
                className="text-brand-green-600 font-medium hover:text-brand-green-700"
              >
                lgpd@ms.gov.br
              </a>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-brand-blue-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-brand-blue-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-brand-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Telefone</h3>
              <p className="text-neutral-600 mb-4">
                Atendimento telefônico de segunda a sexta-feira, das 8h às 17h.
              </p>
              <a 
                href="tel:+556733181000" 
                className="text-brand-blue-600 font-medium hover:text-brand-blue-700"
              >
                (67) 3318-1000
              </a>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-brand-yellow-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-brand-yellow-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-brand-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Endereço</h3>
              <p className="text-neutral-600 mb-4">
                Av. Desembargador José Nunes da Cunha, Bloco I, Campo Grande - MS.
              </p>
              <a 
                href="https://maps.google.com/?q=Av. Desembargador José Nunes da Cunha, Bloco I, Campo Grande - MS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-yellow-600 font-medium hover:text-brand-yellow-700"
              >
                Ver no mapa
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-neutral-800">Envie uma mensagem</h2>
              
              {formStatus === 'success' ? (
                <motion.div 
                  className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-md"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 w-6 h-6 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800">Mensagem enviada com sucesso!</h3>
                      <p className="text-green-700 mt-1">
                        Obrigado por entrar em contato. Nossa equipe responderá sua mensagem em até 2 dias úteis.
                      </p>
                      <button 
                        className="mt-4 text-green-700 font-medium hover:text-green-800"
                        onClick={() => setFormStatus('idle')}
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : formStatus === 'error' ? (
                <motion.div 
                  className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-md"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <AlertCircle className="text-red-600 w-6 h-6 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800">Erro ao enviar mensagem</h3>
                      <p className="text-red-700 mt-1">
                        Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato por telefone.
                      </p>
                      <button 
                        className="mt-4 text-red-700 font-medium hover:text-red-800"
                        onClick={() => setFormStatus('idle')}
                      >
                        Tentar novamente
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="Dúvidas sobre a LGPD">Dúvidas sobre a LGPD</option>
                      <option value="Implementação da LGPD">Implementação da LGPD</option>
                      <option value="Denúncia de violação">Denúncia de violação</option>
                      <option value="Solicitação de materiais">Solicitação de materiais</option>
                      <option value="Outros assuntos">Outros assuntos</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent resize-none"
                      placeholder="Descreva sua mensagem em detalhes..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`inline-flex items-center bg-brand-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors ${
                        formStatus === 'submitting' 
                          ? 'opacity-70 cursor-not-allowed' 
                          : 'hover:bg-brand-green-700'
                      }`}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar mensagem
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* FAQ Section */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-neutral-800 flex items-center">
                <HelpCircle className="w-6 h-6 mr-2 text-brand-green-600" />
                Perguntas Frequentes
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-4 text-neutral-800 font-medium cursor-pointer">
                        <span>{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 bg-brand-blue-50 rounded-lg p-5 border border-brand-blue-100">
                <p className="text-brand-blue-800 font-medium">
                  Não encontrou a resposta para sua dúvida? Entre em contato conosco pelos canais disponíveis ou envie sua pergunta pelo formulário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-neutral-800">Localização</h2>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.9562629226855!2d-54.572932424940994!3d-20.465766256668886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e88e174ae379%3A0xcb1c30fe31a6079b!2sParque%20dos%20Poderes%20-%20Campo%20Grande%2C%20MS!5e0!3m2!1spt-BR!2sbr!4v1698284417389!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">Parque dos Poderes - Governo do Estado de MS</h3>
              <p className="text-neutral-600 mb-4">
                Av. Desembargador José Nunes da Cunha, Bloco I, CEP 79031-310, Campo Grande - MS
              </p>
              <p className="text-neutral-600">
                <span className="font-medium">Horário de atendimento:</span> Segunda a sexta-feira, das 8h às 17h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de ajuda com a LGPD?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa equipe está pronta para orientar sua organização na adequação à Lei Geral de Proteção de Dados e na implementação das melhores práticas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#appointment" 
              className="bg-white text-brand-green-700 px-8 py-4 rounded-md font-medium text-lg hover:bg-neutral-100 transition-colors inline-block"
            >
              Agendar Reunião
            </a>
            <a 
              href="tel:+556733181000" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-white/10 transition-colors inline-block"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;