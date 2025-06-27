import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Shield, 
  Heart, 
  Car, 
  CheckCircle, 
  Instagram, 
  Facebook, 
  Linkedin,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substituir pelo número real
    const message = "Olá! Vim através da sua landing page e gostaria de saber mais sobre planos de saúde e seguros.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+5511999999999";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:consultor@email.com";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 transform hover:scale-110 animate-pulse"
      >
        <MessageCircle size={24} />
      </button>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Seu Especialista em 
                  <span className="text-blue-600 block">Planos de Saúde</span>
                  <span className="text-blue-800 block">& Seguros</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Mais de 10 anos ajudando famílias a encontrar a proteção ideal. 
                  Compare, economize e tenha tranquilidade com o melhor custo-benefício do mercado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} />
                  Fale Agora no WhatsApp
                </button>
                <button
                  onClick={handlePhoneClick}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  Ligar Agora
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Professional Photo */}
            <div className={`flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                  alt="Consultor Especialista"
                  className="relative w-80 h-80 rounded-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105 border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <Award size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para sua proteção e tranquilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Health Insurance */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Heart size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Planos de Saúde</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Planos Individuais e Familiares</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Planos Empresariais</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Análise de Cobertura</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Migração de Planos</span>
                </li>
              </ul>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Consultar Planos
              </button>
            </div>

            {/* Car Insurance */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-700 text-white p-3 rounded-full">
                  <Car size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Seguros de Carro</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Seguro Auto Completo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Proteção Veicular</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Cotação Personalizada</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Renovação Automática</span>
                </li>
              </ul>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Cotar Seguro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher Nossos Serviços?
            </h2>
            <p className="text-xl text-gray-600">
              Sua tranquilidade é nossa prioridade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Cada cliente é único. Analisamos seu perfil para encontrar a melhor solução.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Rápido</h3>
              <p className="text-gray-600">
                Resposta em até 30 minutos. Sua urgência é nossa prioridade.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Máxima Segurança</h3>
              <p className="text-gray-600">
                Trabalhamos apenas com seguradoras certificadas e reconhecidas no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para Ter a Melhor Proteção?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Não espere acontecer. Proteja você e sua família hoje mesmo com os melhores planos do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                Fale Agora e Garanta Sua Proteção!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Estamos sempre disponíveis para ajudar você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">(11) 99999-9999</p>
              <button
                onClick={handlePhoneClick}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
              >
                Ligar Agora
              </button>
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">consultor@email.com</p>
              <button
                onClick={handleEmailClick}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
              >
                Enviar Email
              </button>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Resposta imediata</p>
              <button
                onClick={handleWhatsAppClick}
                className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300"
              >
                Conversar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Especialista em Proteção</h3>
              <p className="text-gray-300 mb-4">
                Conectando você às melhores opções de planos de saúde e seguros de carro.
                Sua tranquilidade é nosso compromisso.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="space-y-2 mb-4">
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <Phone size={16} />
                  (11) 99999-9999
                </p>
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <Mail size={16} />
                  consultor@email.com
                </p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto md:ml-auto md:mr-0"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Consultor Especialista. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;