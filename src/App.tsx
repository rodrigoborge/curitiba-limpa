import React from 'react';
import { Recycle, Droplets, Building2, Send, ChevronDown, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { Card } from './components/Card';
import { SeparationGuide } from './components/SeparationGuide';
import { partners } from './data/partners';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [showGuide, setShowGuide] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
      <div className='min-h-screen bg-white'>
          <header className='relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-400 text-white overflow-hidden'>
              <div className='absolute inset-0 bg-black/20'></div>
              <div className='absolute inset-0 mix-blend-multiply opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-200 via-emerald-400 to-emerald-600'></div>
              <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
                  <h1 className='text-6xl md:text-8xl font-bold mb-8 tracking-tight'>Curitiba Limpa</h1>
                  <p className='text-xl md:text-3xl mb-12 leading-relaxed font-light'>Transformando Curitiba com Educação Ambiental e Coleta Seletiva</p>
                  <a href='#sobre' className='animate-bounce inline-block mt-16'>
                      <ChevronDown size={60} className='text-white/80' />
                  </a>
              </div>
          </header>

          <main>
              <Section id='sobre'>
                  <div className='grid md:grid-cols-2 gap-16 items-center'>
                      <div>
                          <div className='inline-block p-3 bg-emerald-100 rounded-2xl mb-6'>
                              <Recycle className='w-12 h-12 text-emerald-600' />
                          </div>
                          <h2 className='text-4xl font-bold mb-6 text-gray-900'>Conscientização e Separação de Resíduos</h2>
                          <p className='text-lg text-gray-600 leading-relaxed mb-8'>
                              Aprenda a separar corretamente seus resíduos e faça parte da mudança que Curitiba precisa. A coleta seletiva é fundamental para reduzir o impacto ambiental e promover a sustentabilidade.
                          </p>
                          <Button onClick={() => setShowGuide(!showGuide)}>
                              {showGuide ? 'Fechar Guia' : 'Como Separar'} <ArrowRight className='ml-2 w-5 h-5' />
                          </Button>
                      </div>
                      <div className='relative'>
                          <img src='https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80' alt='Reciclagem' className='rounded-3xl shadow-2xl' />
                          <div className='absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent'></div>
                      </div>
                  </div>
                  {showGuide && (
                      <div className='mt-16'>
                          <SeparationGuide />
                      </div>
                  )}
              </Section>

              <Section alternate>
                  <div className='grid md:grid-cols-2 gap-16 items-center'>
                      <div className='order-2 md:order-1'>
                          <img src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80' alt='Pontos de Coleta' className='rounded-3xl shadow-2xl' />
                          <div className='absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent'></div>
                      </div>
                      <div className='order-1 md:order-2'>
                          <div className='inline-block p-3 bg-emerald-100 rounded-2xl mb-6'>
                              <MapPin className='w-12 h-12 text-emerald-600' />
                          </div>
                          <h2 className='text-4xl font-bold mb-6 text-gray-900'>Pontos de Coleta</h2>
                          <p className='text-lg text-gray-600 leading-relaxed mb-8'>
                              Localize facilmente os pontos de coleta de materiais recicláveis e resíduos especiais em Curitiba. Nossa rede de parceiros está sempre pronta para receber seus materiais.
                          </p>
                          <Button>
                              Encontrar Pontos <ArrowRight className='ml-2 w-5 h-5' />
                          </Button>
                      </div>
                  </div>
              </Section>

              <Section>
                  <div className='text-center mb-16'>
                      <h2 className='text-4xl font-bold mb-6 text-gray-900'>Nossos Parceiros</h2>
                      <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Trabalhamos com as melhores cooperativas e empresas de reciclagem da cidade</p>
                  </div>
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                      {partners.map((partner, index) => (
                          <Card key={index}>
                              <div className='flex items-start space-x-4'>
                                  <div className='p-3 bg-emerald-100 rounded-2xl'>
                                      <Building2 className='w-8 h-8 text-emerald-600' />
                                  </div>
                                  <div>
                                      <h3 className='text-xl font-semibold mb-2'>{partner.name}</h3>
                                      <p className='text-gray-600 mb-3'>{partner.description}</p>
                                      <p className='text-sm text-emerald-600 flex items-center'>
                                          <MapPin className='w-4 h-4 mr-1' />
                                          {partner.location}
                                      </p>
                                  </div>
                              </div>
                          </Card>
                      ))}
                  </div>
              </Section>

              <Section alternate>
                  <div className='max-w-4xl mx-auto'>
                      <div className='text-center mb-12'>
                          <h2 className='text-4xl font-bold mb-6 text-gray-900'>Entre em Contato</h2>
                          <p className='text-xl text-gray-600'>Tem alguma dúvida ou sugestão? Ficaremos felizes em ajudar!</p>
                      </div>
                      <Card>
                          <form onSubmit={handleSubmit} className='space-y-6'>
                              <div className='grid md:grid-cols-2 gap-6'>
                                  <div>
                                      <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                                          Nome
                                      </label>
                                      <input type='text' id='name' className='w-full rounded-xl border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500' />
                                  </div>
                                  <div>
                                      <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                                          Email
                                      </label>
                                      <input type='email' id='email' className='w-full rounded-xl border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500' />
                                  </div>
                              </div>
                              <div>
                                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                                      Mensagem
                                  </label>
                                  <textarea id='message' rows={4} className='w-full rounded-xl border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500'></textarea>
                              </div>
                              <div className='text-center'>
                                  <Button>
                                      <Send className='w-5 h-5 mr-2' />
                                      Enviar Mensagem
                                  </Button>
                              </div>
                          </form>
                      </Card>
                  </div>
              </Section>
          </main>

          <footer className='bg-gray-900 text-white py-16'>
              <div className='max-w-7xl mx-auto px-4'>
                  <div className='grid md:grid-cols-3 gap-12'>
                      <div>
                          <h3 className='text-2xl font-bold mb-4'>Curitiba Limpa</h3>
                          <p className='text-gray-400 leading-relaxed'>Transformando nossa cidade através da conscientização ambiental.</p>
                      </div>
                      <div>
                          <h3 className='text-2xl font-bold mb-4'>Contato</h3>
                          <ul className='space-y-3 text-gray-400'>
                              <li className='flex items-center'>
                                  <MapPin className='w-5 h-5 mr-3 text-emerald-400' />
                                  Curitiba, PR
                              </li>
                              <li className='flex items-center'>
                                  <Mail className='w-5 h-5 mr-3 text-emerald-400' />
                                  contato@curitibalimpa.org.br
                              </li>
                              <li className='flex items-center'>
                                  <Phone className='w-5 h-5 mr-3 text-emerald-400' />
                                  (41) 3000-0000
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h3 className='text-2xl font-bold mb-4'>ESG</h3>
                          <ul className='space-y-3 text-gray-400'>
                              <li className='flex items-center'>
                                  <Droplets className='w-5 h-5 mr-3 text-emerald-400' />
                                  Água potável e saneamento
                              </li>
                              <li className='flex items-center'>
                                  <Recycle className='w-5 h-5 mr-3 text-emerald-400' />
                                  Consumo e produção responsáveis
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className='mt-12 pt-8 border-t border-gray-800 text-center text-gray-400'>
                      <p>&copy; {new Date().getFullYear()} Curitiba Limpa. Atividades Extensionistas I - Tecnologia aplicada à Inclusão Digital.</p>
                  </div>
              </div>
          </footer>
      </div>
  );
}

export default App;