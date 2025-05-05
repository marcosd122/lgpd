import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Search, BookOpen, List, Clock, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('all');

  const resources = [
    {
      id: 1,
      title: 'Lei Geral de Proteção de Dados - LGPD',
      description: 'Texto integral da Lei nº 13.709/2018 (LGPD) com as alterações realizadas.',
      category: 'legislation',
      type: 'PDF',
      size: '1.2 MB',
      date: '15/03/2023',
    },
    {
      id: 2,
      title: 'Cartilha Informativa sobre a LGPD',
      description: 'Material explicativo sobre os principais conceitos e obrigações previstas na LGPD.',
      category: 'guide',
      type: 'PDF',
      size: '3.5 MB',
      date: '20/01/2023',
    },
    {
      id: 3,
      title: 'Manual de Boas Práticas para Adequação à LGPD',
      description: 'Guia prático com recomendações e passos para adequação de organizações à LGPD.',
      category: 'guide',
      type: 'PDF',
      size: '4.8 MB',
      date: '12/04/2023',
    },
    {
      id: 4,
      title: 'Modelo de Política de Privacidade',
      description: 'Template para elaboração de política de privacidade em conformidade com a LGPD.',
      category: 'template',
      type: 'DOCX',
      size: '250 KB',
      date: '05/02/2023',
    },
    {
      id: 5,
      title: 'Modelo de Relatório de Impacto à Proteção de Dados Pessoais',
      description: 'Template para elaboração do RIPD conforme exigido pela LGPD.',
      category: 'template',
      type: 'DOCX',
      size: '320 KB',
      date: '18/03/2023',
    },
    {
      id: 6,
      title: 'Guia de Implementação da LGPD para Órgãos Públicos',
      description: 'Guia com orientações específicas para implementação da LGPD em órgãos e entidades do setor público.',
      category: 'guide',
      type: 'PDF',
      size: '5.2 MB',
      date: '03/05/2023',
    },
    {
      id: 7,
      title: 'Checklist para Adequação à LGPD',
      description: 'Lista de verificação para avaliação de conformidade com a LGPD.',
      category: 'template',
      type: 'XLSX',
      size: '180 KB',
      date: '25/02/2023',
    },
    {
      id: 8,
      title: 'Decreto nº 10.474/2020 - Estrutura Regimental da ANPD',
      description: 'Decreto que estabelece a estrutura regimental da Autoridade Nacional de Proteção de Dados.',
      category: 'legislation',
      type: 'PDF',
      size: '850 KB',
      date: '10/01/2023',
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || resource.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Materiais e Recursos</h1>
          <p className="text-xl max-w-3xl">
            Acesse documentos, guias e materiais sobre a LGPD para auxiliar na compreensão e implementação da lei.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-1/2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar materiais..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-auto flex items-center gap-3">
              <Filter className="text-neutral-700" />
              <span className="text-neutral-700 mr-2">Filtrar por:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === 'all'
                      ? 'bg-brand-green-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveFilter('all')}
                >
                  Todos
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === 'legislation'
                      ? 'bg-brand-green-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveFilter('legislation')}
                >
                  Legislação
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === 'guide'
                      ? 'bg-brand-green-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveFilter('guide')}
                >
                  Guias
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === 'template'
                      ? 'bg-brand-green-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveFilter('template')}
                >
                  Modelos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/4 bg-neutral-100 p-6 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className={`p-3 rounded-full ${
                        resource.category === 'legislation' 
                          ? 'bg-brand-blue-100' 
                          : resource.category === 'guide' 
                            ? 'bg-brand-green-100' 
                            : 'bg-brand-yellow-100'
                      }`}>
                        {resource.category === 'legislation' ? (
                          <BookOpen className={`w-8 h-8 text-brand-blue-600`} />
                        ) : resource.category === 'guide' ? (
                          <FileText className={`w-8 h-8 text-brand-green-600`} />
                        ) : (
                          <List className={`w-8 h-8 text-brand-yellow-600`} />
                        )}
                      </div>
                      <span className="mt-3 text-xs font-medium uppercase text-neutral-500">{resource.type}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-neutral-800">{resource.title}</h3>
                      <span className="bg-neutral-100 text-neutral-600 text-xs py-1 px-2 rounded">{resource.size}</span>
                    </div>
                    <p className="text-neutral-600 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center text-neutral-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Atualizado em: {resource.date}</span>
                      </div>
                      <a 
                        href={`#download-${resource.id}`} 
                        className="inline-flex items-center bg-brand-green-50 text-brand-green-700 hover:bg-brand-green-100 px-3 py-1.5 rounded text-sm font-medium transition-colors"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-16">
                <div className="bg-neutral-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Nenhum resultado encontrado</h3>
                <p className="text-neutral-600">
                  Não encontramos nenhum material que corresponda à sua busca. Tente outros termos ou remova os filtros aplicados.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-neutral-800">Outros Recursos Úteis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-brand-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Links e Referências</h3>
              <p className="text-neutral-600 mb-4">
                Links para sites oficiais, legislação complementar e outros recursos relevantes sobre proteção de dados.
              </p>
              <a 
                href="#external-links" 
                className="text-brand-green-600 font-medium hover:text-brand-green-700 inline-flex items-center"
              >
                Ver links
              </a>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-brand-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Perguntas Frequentes</h3>
              <p className="text-neutral-600 mb-4">
                Respostas para as dúvidas mais comuns sobre a aplicação da LGPD e proteção de dados pessoais.
              </p>
              <Link
                to="/faq" 
                className="text-brand-blue-600 font-medium hover:text-brand-blue-700 inline-flex items-center"
              >
                Ver FAQs
              </Link>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <List className="w-8 h-8 text-brand-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Cursos e Treinamentos</h3>
              <p className="text-neutral-600 mb-4">
                Informações sobre cursos, palestras e capacitações relacionadas à LGPD e proteção de dados.
              </p>
              <a 
                href="#training" 
                className="text-brand-yellow-600 font-medium hover:text-brand-yellow-700 inline-flex items-center"
              >
                Ver treinamentos
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Resources */}
      <section className="py-16 bg-brand-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Não encontrou o que procurava?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco para solicitar materiais específicos ou tirar dúvidas sobre a LGPD.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-blue-700 px-8 py-4 rounded-md font-medium text-lg hover:bg-neutral-100 transition-colors inline-block"
          >
            Solicitar Materiais
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;