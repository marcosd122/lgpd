import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, HelpCircle, ArrowRight, Shield, Users, Database, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-yellow-700 to-brand-blue-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-full bg-[url('https://images.pexels.com/photos/3762927/pexels-photo-3762927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Lei Geral de Proteção de Dados
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A Lei nº 13.709/2018 estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais, impondo mais proteção e penalidades para o não cumprimento.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/about" 
                className="bg-white text-brand-green-700 px-6 py-3 rounded-md font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Saiba mais
              </Link>
              <Link 
                to="/resources" 
                className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                <FileText className="w-5 h-5 mr-2" />
                Acessar Materiais
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">O que você precisa saber sobre a LGPD</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-green-500 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-brand-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Proteção de Dados</h3>
              <p className="text-neutral-600 mb-4">
                Entenda como a LGPD protege seus dados pessoais e estabelece diretrizes para o tratamento dessas informações.
              </p>
              <Link to="/about" className="text-brand-green-600 font-medium inline-flex items-center hover:text-brand-green-700">
                Leia mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-yellow-500 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-yellow-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-brand-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Direitos do Titular</h3>
              <p className="text-neutral-600 mb-4">
                Conheça seus direitos como titular de dados pessoais e como exercê-los perante as organizações.
              </p>
              <Link to="/about#direitos" className="text-brand-yellow-600 font-medium inline-flex items-center hover:text-brand-yellow-700">
                Leia mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-blue-500 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Database className="w-8 h-8 text-brand-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Tratamento de Dados</h3>
              <p className="text-neutral-600 mb-4">
                Saiba como deve ser realizado o tratamento de dados pessoais de acordo com os princípios da LGPD.
              </p>
              <Link to="/about#tratamento" className="text-brand-blue-600 font-medium inline-flex items-center hover:text-brand-blue-700">
                Leia mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">A importância da LGPD para o cidadão</h2>
              <p className="text-neutral-600 mb-6">
                A LGPD veio para assegurar o direito à privacidade e à proteção de dados pessoais dos brasileiros, através de práticas transparentes e seguras, garantindo aos cidadãos maior controle sobre suas informações.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-3">
                    <div className="bg-brand-green-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-neutral-700">Maior transparência no uso de dados pessoais</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-3">
                    <div className="bg-brand-green-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-neutral-700">Direito de acesso, correção e exclusão de dados</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-3">
                    <div className="bg-brand-green-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-neutral-700">Necessidade de consentimento expresso para coleta</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-3">
                    <div className="bg-brand-green-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-neutral-700">Proteção contra uso indevido de informações pessoais</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  to="/contact"
                  className="bg-brand-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-brand-green-700 transition-colors inline-flex items-center"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Tire suas dúvidas
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="LGPD Importância"
                className="rounded-xl shadow-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">Materiais e Recursos</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Acesse documentos, guias e recursos sobre a LGPD para melhor compreensão da lei e sua aplicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-blue-50 p-4 rounded-full mb-4">
                <Download className="w-8 h-8 text-brand-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">Texto da Lei</h3>
              <p className="text-neutral-600 mb-4 text-sm">
                Leia o texto completo da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
              </p>
              <a 
                href="#download-lei"
                className="mt-auto text-brand-blue-600 font-medium hover:text-brand-blue-700 inline-flex items-center"
              >
                Baixar PDF <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-50 p-4 rounded-full mb-4">
                <Download className="w-8 h-8 text-brand-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">Cartilha Informativa</h3>
              <p className="text-neutral-600 mb-4 text-sm">
                Material didático explicando os principais pontos da LGPD de forma simplificada.
              </p>
              <a 
                href="#download-cartilha"
                className="mt-auto text-brand-green-600 font-medium hover:text-brand-green-700 inline-flex items-center"
              >
                Baixar PDF <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-yellow-50 p-4 rounded-full mb-4">
                <Download className="w-8 h-8 text-brand-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">Guia para Empresas</h3>
              <p className="text-neutral-600 mb-4 text-sm">
                Orientações para adequação das empresas e órgãos públicos às regras da LGPD.
              </p>
              <a 
                href="#download-guia"
                className="mt-auto text-brand-yellow-600 font-medium hover:text-brand-yellow-700 inline-flex items-center"
              >
                Baixar PDF <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-neutral-100 p-4 rounded-full mb-4">
                <Download className="w-8 h-8 text-neutral-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">Modelo de Documentos</h3>
              <p className="text-neutral-600 mb-4 text-sm">
                Templates e modelos de documentos para conformidade com a LGPD.
              </p>
              <a 
                href="#download-modelos"
                className="mt-auto text-neutral-600 font-medium hover:text-neutral-800 inline-flex items-center"
              >
                Baixar ZIP <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/resources"
              className="inline-flex items-center text-brand-green-600 font-medium hover:text-brand-green-700"
            >
              Ver todos os materiais disponíveis <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tem dúvidas sobre a LGPD?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato com nosso canal de atendimento. Estamos à disposição para esclarecer suas dúvidas e orientar sobre a proteção de dados pessoais.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-brand-blue-700 px-8 py-4 rounded-md font-medium text-lg hover:bg-neutral-100 transition-colors inline-block"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;