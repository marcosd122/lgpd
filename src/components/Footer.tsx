import React from 'react';
import { Link } from 'react-router-dom';
import BrazilFlag from './BrazilFlag';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="https://www.ms.gov.br/wp-content/uploads/2023/01/LOGO-GOV-MATO-GROSSO-SUL-br.png" 
                alt="----"
                className="h-16 w-auto" 
              />
            </Link>
            <div className="text-neutral-200 mt-4">
              <p className="text-xl font-semibold">LGPD</p>
              <p className="text-sm">Lei Geral de Proteção de Dados</p>
              <p className="text-sm mt-4">Controladoria Geral do Estado de Rondônia </p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-brand-green-600 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Sobre a LGPD
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Materiais
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-brand-green-600 pb-2">Links Institucionais</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.ms.gov.br/" className="text-neutral-200 hover:text-white hover:underline transition-colors flex items-center">
                  <span>Portal do Governo</span>
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.transparencia.ms.gov.br/" className="text-neutral-200 hover:text-white hover:underline transition-colors flex items-center">
                  <span>Transparência</span>
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" className="text-neutral-200 hover:text-white hover:underline transition-colors flex items-center">
                  <span>Lei 13.709/2018</span>
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.gov.br/anpd/pt-br" className="text-neutral-200 hover:text-white hover:underline transition-colors flex items-center">
                  <span>ANPD</span>
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-brand-green-600 pb-2">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 w-5 h-5 mt-0.5 text-brand-green-300" />
                <span className="text-neutral-200">
                  Av. José Nunes da Cunha, Bloco I, CEP 79031-310, Porto Velho - RO
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 w-5 h-5 text-brand-green-300" />
                <span className="text-neutral-200">(69) 3318-1000</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 w-5 h-5 text-brand-green-300" />
                <span className="text-neutral-200">lgpd@cge.gov.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-green-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BrazilFlag className="w-5 h-5 mr-2" />
            <span className="text-sm text-neutral-200">
              © {currentYear} Diretoria de Transparência e Governo Aberto - DTGA. Todos os direitos reservados.
            </span>
          </div>
          <div>
            <a href="#privacy" className="text-sm text-neutral-200 hover:text-white hover:underline transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;