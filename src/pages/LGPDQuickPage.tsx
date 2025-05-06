import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Database, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LGPDQuickPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">LGPD em 2 Minutos</h1>
          <p className="text-xl max-w-3xl">
            Entenda os principais pontos da Lei Geral de Proteção de Dados de forma rápida e objetiva.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand-green-50 border-l-4 border-brand-green-500 p-6 rounded-r-xl mb-12">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800">O que é a LGPD?</h2>
              <p className="text-neutral-700">
                A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) é a legislação brasileira que regula o tratamento de dados pessoais por pessoas físicas e jurídicas, de direito público ou privado. Seu objetivo é proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade das pessoas.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="bg-brand-blue-100 p-3 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-brand-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">Dados Protegidos</h3>
                    <p className="text-neutral-600">
                      A LGPD protege dados pessoais, que são informações relacionadas a uma pessoa natural identificada ou identificável, como nome, RG, CPF, endereço, e-mail, etc. Também há uma categoria especial chamada "dados sensíveis", que inclui informações sobre origem racial ou étnica, convicção religiosa, opinião política, saúde, vida sexual, dados genéticos ou biométricos.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="bg-brand-green-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-brand-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">Quem deve se adequar?</h3>
                    <p className="text-neutral-600">
                      A lei se aplica a qualquer operação de tratamento de dados realizada por pessoa física ou jurídica, de direito público ou privado, independentemente do meio, do país de sua sede ou do país onde estejam localizados os dados, desde que:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>A operação seja realizada no território nacional</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>A atividade de tratamento tenha por objetivo ofertar bens ou serviços no Brasil</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Os dados pessoais objeto do tratamento tenham sido coletados no território nacional</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="bg-brand-yellow-100 p-3 rounded-full mr-4">
                    <Database className="w-6 h-6 text-brand-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">Princípios Fundamentais</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Finalidade específica</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Adequação</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Necessidade</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Livre acesso</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Qualidade dos dados</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Transparência</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Segurança</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Prevenção</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Não discriminação</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Responsabilização e prestação de contas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="bg-brand-blue-100 p-3 rounded-full mr-4">
                    <Lock className="w-6 h-6 text-brand-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">Direitos dos Titulares</h3>
                    <p className="text-neutral-600 mb-4">
                      Os titulares dos dados têm direitos garantidos pela LGPD, incluindo:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Confirmação da existência de tratamento</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Acesso aos dados</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Correção de dados incompletos</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Portabilidade dos dados</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Eliminação dos dados</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Revogação do consentimento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">Penalidades</h3>
                    <p className="text-neutral-600 mb-4">
                      O descumprimento da LGPD pode resultar em:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Advertência</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Multa de até 2% do faturamento, limitada a R$ 50 milhões por infração</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Bloqueio ou eliminação dos dados pessoais</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                        <span>Suspensão parcial ou total do funcionamento do banco de dados</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Quer saber mais sobre a LGPD?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Acesse nossa seção de materiais para encontrar guias detalhados, documentos e recursos sobre a Lei Geral de Proteção de Dados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/about" 
              className="bg-white text-brand-blue-700 px-8 py-4 rounded-md font-medium text-lg hover:bg-neutral-100 transition-colors inline-block"
            >
              Saiba mais
            </Link>
            <Link 
              to="/resources" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-white/10 transition-colors inline-block"
            >
              Ver materiais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LGPDQuickPage;