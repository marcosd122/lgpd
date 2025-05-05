import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, User, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const newsItems = [
    {
      id: 1,
      title: 'Nova regulamentação da ANPD sobre relatórios de impacto',
      summary: 'A Autoridade Nacional de Proteção de Dados publicou novas diretrizes sobre a elaboração de relatórios de impacto à proteção de dados pessoais.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
      date: '15/05/2023',
      author: 'Equipe LGPD MS',
      category: 'Regulamentação',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Lançamento do Manual de Boas Práticas em Proteção de Dados para o Setor Público',
      summary: 'Foi lançado hoje o novo Manual de Boas Práticas em Proteção de Dados voltado especificamente para órgãos e entidades do setor público.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
      date: '03/05/2023',
      author: 'Equipe LGPD MS',
      category: 'Publicações',
      image: 'https://images.pexels.com/photos/5095897/pexels-photo-5095897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '4 min'
    },
    {
      id: 3,
      title: 'Multa aplicada pela ANPD por vazamento de dados pessoais',
      summary: 'A Autoridade Nacional de Proteção de Dados aplicou multa a empresa por incidente de segurança que resultou em vazamento de dados pessoais.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
      date: '20/04/2023',
      author: 'Equipe LGPD MS',
      category: 'Sanções',
      image: 'https://images.pexels.com/photos/3989884/pexels-photo-3989884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Workshop sobre adequação à LGPD para pequenas empresas',
      summary: 'Será realizado no próximo mês um workshop gratuito sobre implementação da LGPD voltado para micro e pequenas empresas do estado.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
      date: '12/04/2023',
      author: 'Equipe LGPD MS',
      category: 'Eventos',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '3 min'
    },
    {
      id: 5,
      title: 'Novas diretrizes sobre cookies e rastreadores online',
      summary: 'A ANPD divulgou um documento com diretrizes e recomendações para o uso de cookies e outras tecnologias de rastreamento online.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
      date: '28/03/2023',
      author: 'Equipe LGPD MS',
      category: 'Regulamentação',
      image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '7 min'
    },
    {
      id: 6,
      title: 'Governo de MS promove capacitação em LGPD para servidores públicos',
      summary: 'O Governo do Estado de Mato Grosso do Sul iniciou um programa de capacitação em LGPD para servidores públicos estaduais.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
      date: '15/03/2023',
      author: 'Equipe LGPD MS',
      category: 'Capacitação',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '5 min'
    },
  ];

  const filteredNews = newsItems.filter((news) => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    news.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Notícias e Atualizações</h1>
          <p className="text-xl max-w-3xl">
            Fique por dentro das novidades relacionadas à LGPD, eventos, regulamentações e boas práticas em proteção de dados.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar notícias..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Featured News */}
      {searchTerm === '' && (
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-neutral-800">Destaque</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg h-full">
                <img 
                  src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="ANPD publica guia definitivo sobre relatórios de impacto"
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6 bg-white">
                  <div className="flex items-center mb-4">
                    <span className="bg-brand-green-100 text-brand-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Regulamentação</span>
                    <span className="mx-2 text-neutral-300">|</span>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>22/05/2023</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-neutral-800">ANPD publica guia definitivo sobre relatórios de impacto à proteção de dados</h3>
                  <p className="text-neutral-600 mb-4">
                    A Autoridade Nacional de Proteção de Dados (ANPD) publicou nesta semana a versão final do guia orientativo sobre Relatórios de Impacto à Proteção de Dados Pessoais (RIPD), documento que oferece diretrizes práticas para organizações.
                  </p>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center">
                      <div className="flex items-center text-neutral-500 text-sm mr-4">
                        <User className="w-4 h-4 mr-1" />
                        <span>Equipe LGPD MS</span>
                      </div>
                      <div className="flex items-center text-neutral-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>8 min de leitura</span>
                      </div>
                    </div>
                    <a 
                      href="#read-more" 
                      className="text-brand-green-600 font-medium hover:text-brand-green-700 inline-flex items-center"
                    >
                      Ler mais <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="ANPD inicia fiscalização em empresas do setor financeiro"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="md:w-2/3 p-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-brand-yellow-100 text-brand-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Fiscalização</span>
                      <span className="mx-2 text-neutral-300">|</span>
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>18/05/2023</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-neutral-800">ANPD inicia fiscalização em empresas do setor financeiro</h3>
                    <p className="text-neutral-600 text-sm mb-2 line-clamp-2">
                      A Autoridade Nacional de Proteção de Dados começou esta semana um processo de fiscalização em instituições financeiras para verificar a conformidade com a LGPD.
                    </p>
                    <a 
                      href="#read-more" 
                      className="text-brand-green-600 text-sm font-medium hover:text-brand-green-700 inline-flex items-center"
                    >
                      Ler mais <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="MS realiza primeiro fórum estadual sobre proteção de dados"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="md:w-2/3 p-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-brand-blue-100 text-brand-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Eventos</span>
                      <span className="mx-2 text-neutral-300">|</span>
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>10/05/2023</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-neutral-800">MS realiza primeiro fórum estadual sobre proteção de dados</h3>
                    <p className="text-neutral-600 text-sm mb-2 line-clamp-2">
                      O Governo do Estado de Mato Grosso do Sul realizará no próximo mês o primeiro fórum estadual dedicado à proteção de dados e privacidade.
                    </p>
                    <a 
                      href="#read-more" 
                      className="text-brand-green-600 text-sm font-medium hover:text-brand-green-700 inline-flex items-center"
                    >
                      Ler mais <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Estudo revela grau de adequação das empresas à LGPD"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="md:w-2/3 p-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-brand-green-100 text-brand-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Pesquisa</span>
                      <span className="mx-2 text-neutral-300">|</span>
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>05/05/2023</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-neutral-800">Estudo revela grau de adequação das empresas à LGPD</h3>
                    <p className="text-neutral-600 text-sm mb-2 line-clamp-2">
                      Pesquisa realizada pela Universidade Federal de Mato Grosso do Sul revela que apenas 45% das empresas do estado estão totalmente adequadas à LGPD.
                    </p>
                    <a 
                      href="#read-more" 
                      className="text-brand-green-600 text-sm font-medium hover:text-brand-green-700 inline-flex items-center"
                    >
                      Ler mais <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-neutral-800">
            {searchTerm ? `Resultados da busca: "${searchTerm}"` : "Notícias Recentes"}
          </h2>
          
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <motion.div 
                  key={news.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <span className="bg-neutral-100 text-neutral-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {news.category}
                      </span>
                      <span className="mx-2 text-neutral-300">|</span>
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-neutral-800 line-clamp-2">{news.title}</h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                      {news.summary}
                    </p>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-100">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{news.readTime} de leitura</span>
                      </div>
                      <a 
                        href={`#news-${news.id}`} 
                        className="text-brand-green-600 text-sm font-medium hover:text-brand-green-700 inline-flex items-center"
                      >
                        Ler mais <ArrowRight className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-neutral-50 rounded-xl">
              <div className="bg-neutral-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-neutral-600 max-w-md mx-auto">
                Não encontramos nenhuma notícia que corresponda à sua busca. Tente outros termos ou navegue pelas categorias abaixo.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredNews.length > 0 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <a
                  href="#page-prev"
                  className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </a>
                <a
                  href="#page-1"
                  className="px-4 py-2 rounded-md bg-brand-green-600 text-white font-medium"
                >
                  1
                </a>
                <a
                  href="#page-2"
                  className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-medium"
                >
                  2
                </a>
                <a
                  href="#page-3"
                  className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-medium"
                >
                  3
                </a>
                <span className="text-neutral-500">...</span>
                <a
                  href="#page-next"
                  className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-neutral-800">Categorias</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <motion.a
              href="#category-regulamentacao"
              className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-2 rounded-full mr-3">
                <Tag className="w-5 h-5 text-brand-green-600" />
              </div>
              <span className="text-neutral-700 font-medium">Regulamentação</span>
            </motion.a>
            
            <motion.a
              href="#category-eventos"
              className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-blue-100 p-2 rounded-full mr-3">
                <Tag className="w-5 h-5 text-brand-blue-600" />
              </div>
              <span className="text-neutral-700 font-medium">Eventos</span>
            </motion.a>
            
            <motion.a
              href="#category-capacitacao"
              className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-yellow-100 p-2 rounded-full mr-3">
                <Tag className="w-5 h-5 text-brand-yellow-600" />
              </div>
              <span className="text-neutral-700 font-medium">Capacitação</span>
            </motion.a>
            
            <motion.a
              href="#category-sancoes"
              className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <Tag className="w-5 h-5 text-red-600" />
              </div>
              <span className="text-neutral-700 font-medium">Sanções</span>
            </motion.a>
            
            <motion.a
              href="#category-publicacoes"
              className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <Tag className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-neutral-700 font-medium">Publicações</span>
            </motion.a>
            
            <motion.a
              href="#category-pesquisa"
              className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Tag className="w-5 h-5 text-indigo-600" />
              </div>
              <span className="text-neutral-700 font-medium">Pesquisa</span>
            </motion.a>
            
            <motion.a
              href="#category-fiscalizacao"
              className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <Tag className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-neutral-700 font-medium">Fiscalização</span>
            </motion.a>
            
            <motion.a
              href="#category-casos"
              className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-teal-100 p-2 rounded-full mr-3">
                <Tag className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-neutral-700 font-medium">Casos Práticos</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-green-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-brand-green-800 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Inscreva-se em nossa Newsletter</h2>
              <p className="text-neutral-200 max-w-xl mx-auto">
                Receba atualizações sobre a LGPD, novidades sobre proteção de dados e informações sobre eventos diretamente em seu e-mail.
              </p>
            </div>
            
            <form className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu endereço de e-mail"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow-400 text-neutral-800"
                />
                <button
                  type="submit"
                  className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-yellow-900 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Inscrever-se
                </button>
              </div>
              <p className="text-xs text-neutral-300 mt-4 text-center">
                Ao se inscrever, você concorda com nossa política de privacidade e termos de uso. 
                Você pode cancelar a inscrição a qualquer momento.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;