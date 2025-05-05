import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Database, AlertCircle, Check, Clock, Building } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sobre a LGPD</h1>
          <p className="text-xl max-w-3xl">
            Conheça a Lei Geral de Proteção de Dados Pessoais (LGPD) e entenda seu impacto na proteção da privacidade dos cidadãos brasileiros.
          </p>
        </div>
      </section>

      {/* Content Navigation */}
      <section className="bg-white shadow-md sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-start py-4 overflow-x-auto whitespace-nowrap">
            <a href="#o-que-e" className="px-4 py-2 mr-4 text-neutral-700 font-medium hover:text-brand-green-600 transition-colors">
              O que é a LGPD?
            </a>
            <a href="#principios" className="px-4 py-2 mr-4 text-neutral-700 font-medium hover:text-brand-green-600 transition-colors">
              Princípios
            </a>
            <a href="#direitos" className="px-4 py-2 mr-4 text-neutral-700 font-medium hover:text-brand-green-600 transition-colors">
              Direitos do Titular
            </a>
            <a href="#tratamento" className="px-4 py-2 mr-4 text-neutral-700 font-medium hover:text-brand-green-600 transition-colors">
              Tratamento de Dados
            </a>
            <a href="#aplicacao" className="px-4 py-2 mr-4 text-neutral-700 font-medium hover:text-brand-green-600 transition-colors">
              Aplicação
            </a>
            <a href="#sancoes" className="px-4 py-2 text-neutral-700 font-medium hover:text-brand-green-600 transition-colors">
              Sanções
            </a>
          </div>
        </div>
      </section>

      {/* What is LGPD */}
      <section id="o-que-e" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/3 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">O que é a LGPD?</h2>
              <p className="text-neutral-700 mb-4">
                A Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018, é a legislação brasileira que regula as atividades de tratamento de dados pessoais. A lei se baseia em diversos valores, como o respeito à privacidade, à autodeterminação informativa, à liberdade de expressão, de informação, de comunicação e de opinião.
              </p>
              <p className="text-neutral-700 mb-4">
                Inspirada no Regulamento Geral de Proteção de Dados (GDPR) da União Europeia, a LGPD foi criada para garantir maior controle dos cidadãos brasileiros sobre suas informações pessoais, impondo regras claras sobre como os dados podem ser coletados, processados, armazenados e compartilhados.
              </p>
              <p className="text-neutral-700 mb-4">
                A lei entrou em vigor em setembro de 2020, com as sanções aplicáveis a partir de agosto de 2021, e é supervisionada pela Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </div>
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <motion.div 
                className="bg-white rounded-xl shadow-md p-8 border-l-4 border-brand-green-500"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Pontos Fundamentais</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                    <span className="text-neutral-700">Proteção de dados pessoais de pessoas naturais</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                    <span className="text-neutral-700">Aplicação em meios físicos e digitais</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                    <span className="text-neutral-700">Regulação do tratamento por pessoas naturais ou jurídicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                    <span className="text-neutral-700">Bases legais para o tratamento de dados</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green-500 mr-2 mt-0.5" />
                    <span className="text-neutral-700">Sanções administrativas para descumprimento</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-neutral-800">Princípios da LGPD</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Finalidade</h3>
              <p className="text-neutral-600">
                O tratamento de dados deve ser realizado para propósitos legítimos, específicos, explícitos e informados ao titular.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Adequação</h3>
              <p className="text-neutral-600">
                Compatibilidade do tratamento com as finalidades informadas ao titular, dentro do contexto do tratamento.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Necessidade</h3>
              <p className="text-neutral-600">
                Limitação do tratamento ao mínimo necessário para a realização de suas finalidades, abrangendo dados pertinentes e proporcionais.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Livre Acesso</h3>
              <p className="text-neutral-600">
                Garantia aos titulares de consulta facilitada e gratuita sobre a forma e a duração do tratamento, bem como sobre seus dados.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">05</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Qualidade dos Dados</h3>
              <p className="text-neutral-600">
                Garantia aos titulares de exatidão, clareza, relevância e atualização dos dados, de acordo com a necessidade e para o cumprimento da finalidade.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">06</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Transparência</h3>
              <p className="text-neutral-600">
                Informações claras, precisas e facilmente acessíveis sobre o tratamento e os respectivos agentes de tratamento.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">07</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Segurança</h3>
              <p className="text-neutral-600">
                Utilização de medidas técnicas e administrativas para proteger os dados pessoais de acessos não autorizados e situações acidentais ou ilícitas.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">08</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Prevenção</h3>
              <p className="text-neutral-600">
                Adoção de medidas para prevenir a ocorrência de danos em virtude do tratamento de dados pessoais.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">09</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Não Discriminação</h3>
              <p className="text-neutral-600">
                Impossibilidade de realização do tratamento para fins discriminatórios ilícitos ou abusivos.
              </p>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-brand-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-brand-green-700 font-bold text-lg">10</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Responsabilização e Prestação de Contas</h3>
              <p className="text-neutral-600">
                Demonstração da adoção de medidas eficazes e capazes de comprovar a observância e o cumprimento das normas de proteção de dados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rights of Data Subjects */}
      <section id="direitos" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">Direitos do Titular dos Dados</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              A LGPD garante aos titulares de dados pessoais diversos direitos que podem ser exercidos a qualquer momento mediante requisição ao controlador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-brand-blue-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-brand-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">Confirmação e Acesso aos Dados</h3>
                  <p className="text-neutral-600">
                    O titular tem o direito de confirmar a existência de tratamento de seus dados e de acessar esses dados de forma clara e completa.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-brand-blue-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-brand-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">Correção de Dados</h3>
                  <p className="text-neutral-600">
                    O titular pode solicitar a correção de dados incompletos, inexatos ou desatualizados.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-brand-blue-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-brand-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">Anonimização, Bloqueio ou Eliminação</h3>
                  <p className="text-neutral-600">
                    O titular pode solicitar anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-brand-blue-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-brand-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">Portabilidade dos Dados</h3>
                  <p className="text-neutral-600">
                    O titular tem direito à portabilidade dos seus dados para outro fornecedor de serviço ou produto.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-brand-blue-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-brand-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">Revogação do Consentimento</h3>
                  <p className="text-neutral-600">
                    O titular pode revogar o consentimento para o tratamento de seus dados pessoais a qualquer momento.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-brand-blue-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-brand-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">Informação sobre Compartilhamento</h3>
                  <p className="text-neutral-600">
                    O titular tem direito a informações sobre entidades públicas e privadas com as quais seus dados foram compartilhados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Treatment */}
      <section id="tratamento" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-neutral-800">Tratamento de Dados Pessoais</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">Bases Legais para o Tratamento</h3>
              <p className="text-neutral-700 mb-6">
                O tratamento de dados pessoais somente poderá ser realizado nas seguintes hipóteses:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-brand-green-500 w-5 h-5 mr-3 mt-0.5" />
                  <p className="text-neutral-700"><span className="font-medium">Consentimento:</span> Manifestação livre, informada e inequívoca do titular para o tratamento de seus dados.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green-500 w-5 h-5 mr-3 mt-0.5" />
                  <p className="text-neutral-700"><span className="font-medium">Cumprimento de obrigação legal:</span> Quando necessário para o cumprimento de obrigação legal ou regulatória.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green-500 w-5 h-5 mr-3 mt-0.5" />
                  <p className="text-neutral-700"><span className="font-medium">Execução de políticas públicas:</span> Tratamento necessário à execução de políticas públicas previstas em leis ou regulamentos.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green-500 w-5 h-5 mr-3 mt-0.5" />
                  <p className="text-neutral-700"><span className="font-medium">Estudos por órgão de pesquisa:</span> Realização de estudos por órgão de pesquisa, garantida a anonimização dos dados quando possível.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green-500 w-5 h-5 mr-3 mt-0.5" />
                  <p className="text-neutral-700"><span className="font-medium">Execução de contrato:</span> Quando necessário para a execução de contrato do qual o titular é parte.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green-500 w-5 h-5 mr-3 mt-0.5" />
                  <p className="text-neutral-700"><span className="font-medium">Exercício regular de direitos:</span> Para exercício regular de direitos em processo judicial, administrativo ou arbitral.</p>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">Dados Pessoais Sensíveis</h3>
              <p className="text-neutral-700 mb-6">
                São dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato, dados referentes à saúde ou à vida sexual, dados genéticos ou biométricos. Seu tratamento é mais restrito e somente poderá ocorrer em situações específicas previstas na lei.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8 text-neutral-800">Dados de Crianças e Adolescentes</h3>
              <p className="text-neutral-700 mb-4">
                O tratamento de dados pessoais de crianças e adolescentes deverá ser realizado no seu melhor interesse, com o consentimento específico e em destaque dado por pelo menos um dos pais ou responsável legal.
              </p>
              <div className="bg-brand-yellow-50 border-l-4 border-brand-yellow-500 p-4 rounded-r-md">
                <div className="flex items-start">
                  <AlertCircle className="text-brand-yellow-600 w-5 h-5 mr-3 mt-0.5" />
                  <p className="text-neutral-700">
                    Os controladores não deverão condicionar a participação em jogos, aplicações de internet ou outras atividades ao fornecimento de informações pessoais além das estritamente necessárias.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-50 rounded-xl p-8 shadow-sm mt-8">
            <h3 className="text-2xl font-semibold mb-6 text-neutral-800">Término do Tratamento de Dados</h3>
            <p className="text-neutral-700 mb-6">
              O término do tratamento de dados pessoais ocorrerá nas seguintes hipóteses:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Clock className="text-brand-green-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">Verificação de que a finalidade foi alcançada ou que os dados deixaram de ser necessários para a finalidade específica almejada</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-brand-green-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">Fim do período de tratamento estabelecido</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-brand-green-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">Comunicação do titular, inclusive no exercício de seu direito de revogação do consentimento</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-brand-green-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">Determinação da autoridade nacional, quando houver violação da LGPD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="aplicacao" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">Aplicação da LGPD</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              A LGPD se aplica a qualquer operação de tratamento de dados pessoais realizada por pessoa natural ou jurídica, de direito público ou privado, independentemente do meio, do país de sua sede ou do país onde estejam localizados os dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-neutral-800 flex items-center">
                <Building className="w-6 h-6 mr-3 text-brand-blue-600" />
                <span>Empresas Privadas</span>
              </h3>
              <p className="text-neutral-700 mb-4">
                Todas as empresas que realizam tratamento de dados pessoais, independentemente do porte, devem se adequar à LGPD. As principais medidas incluem:
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start">
                  <div className="bg-brand-blue-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-blue-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Mapeamento dos dados pessoais tratados</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-blue-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Identificação da base legal para cada tratamento</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-blue-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Implementação de medidas de segurança técnicas e administrativas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-blue-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Elaboração de Relatório de Impacto à Proteção de Dados, quando necessário</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-blue-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Indicação de um Encarregado de Proteção de Dados (DPO)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-neutral-800 flex items-center">
                <Building className="w-6 h-6 mr-3 text-brand-green-600" />
                <span>Órgãos Públicos</span>
              </h3>
              <p className="text-neutral-700 mb-4">
                Os órgãos públicos também estão sujeitos à LGPD e devem implementar:
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-green-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Política de privacidade e termos de uso claros e acessíveis</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-green-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Canais para atendimento aos direitos dos titulares</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-green-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Medidas de segurança da informação</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-green-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Indicação do encarregado pelo tratamento de dados pessoais</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-green-100 rounded-full p-1 mt-1 mr-2">
                    <div className="bg-brand-green-600 rounded-full w-1.5 h-1.5"></div>
                  </div>
                  <span>Registro das operações de tratamento realizadas</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">Exceções à Aplicação da LGPD</h3>
            <p className="text-neutral-700 mb-4">
              A LGPD não se aplica ao tratamento de dados pessoais:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <AlertCircle className="text-brand-yellow-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">Realizado por pessoa natural para fins exclusivamente particulares e não econômicos</p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-brand-yellow-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">Realizado para fins exclusivamente jornalísticos, artísticos ou acadêmicos</p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-brand-yellow-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">Realizado para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou atividades de investigação e repressão de infrações penais</p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-brand-yellow-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">Provenientes de fora do território nacional e que não sejam objeto de comunicação, uso compartilhado de dados com agentes de tratamento brasileiros ou objeto de transferência internacional de dados com outro país</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctions */}
      <section id="sancoes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-neutral-800">Sanções e Penalidades</h2>
          
          <div className="bg-neutral-50 rounded-xl p-8 shadow-sm">
            <p className="text-neutral-700 mb-6">
              O descumprimento das normas previstas na LGPD sujeita os responsáveis às seguintes sanções, aplicadas pela ANPD:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-brand-green-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-neutral-800">Advertência</h3>
                <p className="text-neutral-700">
                  Com indicação de prazo para adoção de medidas corretivas.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-brand-yellow-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-neutral-800">Multa Simples</h3>
                <p className="text-neutral-700">
                  De até 2% do faturamento, limitada a R$ 50 milhões por infração.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-brand-blue-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-neutral-800">Publicização da Infração</h3>
                <p className="text-neutral-700">
                  Após devidamente apurada e confirmada a sua ocorrência.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-brand-yellow-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-neutral-800">Bloqueio dos Dados</h3>
                <p className="text-neutral-700">
                  Bloqueio dos dados pessoais a que se refere a infração até a sua regularização.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-brand-red-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-neutral-800">Eliminação dos Dados</h3>
                <p className="text-neutral-700">
                  Eliminação dos dados pessoais a que se refere a infração.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-brand-red-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-neutral-800">Suspensão de Atividades</h3>
                <p className="text-neutral-700">
                  Suspensão parcial ou total do funcionamento do banco de dados ou da atividade de tratamento.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-8 bg-brand-yellow-50 border-l-4 border-brand-yellow-500 p-4 rounded-r-md">
              <div className="flex items-start">
                <AlertCircle className="text-brand-yellow-600 w-5 h-5 mr-3 mt-0.5" />
                <p className="text-neutral-700">
                  Para a aplicação das sanções, a autoridade nacional considerará: a gravidade e a natureza das infrações; a boa-fé do infrator; a vantagem auferida ou pretendida; a condição econômica do infrator; a reincidência; o grau do dano; a cooperação do infrator; a adoção de política de boas práticas; e a pronta adoção de medidas corretivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;