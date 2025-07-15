# FMI Contabilidade - Landing Page

Landing page moderna e responsiva para captação de leads da FMI Contabilidade Consultiva.

## 🎯 Objetivo

Criar uma landing page focada em conversão para captar leads qualificados da FMI Contabilidade, com foco em pequenos e micro empresários.

## 📋 Características

- **Design Moderno**: Interface limpa e profissional
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Metodologia BEM**: CSS organizado e escalável
- **Performance**: Carregamento rápido e otimizado
- **Acessibilidade**: Seguindo padrões WCAG
- **SEO**: Estrutura semântica otimizada

## 🏗️ Estrutura do Projeto

```
landing_FMI/
├── index.html              # Página principal
├── css/
│   ├── main.css           # Estilos base e variáveis
│   └── blocks/            # Componentes CSS (BEM)
│       ├── header.css     # Cabeçalho
│       ├── hero.css       # Seção principal
│       ├── about.css      # Sobre a empresa
│       ├── services.css   # Serviços
│       ├── benefits.css   # Benefícios
│       ├── target.css     # Público-alvo
│       ├── cta.css        # Call-to-action
│       ├── footer.css     # Rodapé
│       └── modal.css      # Modal do formulário
├── js/
│   └── main.js           # JavaScript principal
├── assets/
│   └── images/           # Imagens do projeto
└── README.md             # Documentação
```

## 🎨 Design System

### Cores
- **Primária**: `#1e40af` (Azul)
- **Secundária**: `#64748b` (Cinza)
- **Acento**: `#f59e0b` (Laranja)
- **Sucesso**: `#10b981` (Verde)
- **Erro**: `#ef4444` (Vermelho)

### Tipografia
- **Família**: Inter (Google Fonts)
- **Tamanhos**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
- **Pesos**: 300, 400, 500, 600, 700

### Espaçamento
- **Sistema**: Baseado em múltiplos de 0.25rem
- **Escala**: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32

## 📱 Seções da Landing Page

### 1. Header
- Logo da empresa
- Menu de navegação responsivo
- CTA principal
- Menu mobile com hamburger

### 2. Hero Section
- Headline impactante
- Proposta de valor clara
- Estatísticas da empresa
- CTA principal

### 3. Sobre a Empresa
- História e conquistas
- Parceiros homologados
- Diferencial competitivo

### 4. Serviços
- Assessoria contábil (foco)
- Serviços básicos
- Novo produto (Gestão de Certidões)
- Link para site completo

### 5. Benefícios
- Foco em resultados
- Relacionamento
- Ecossistema completo
- Atendimento regional

### 6. Público-alvo
- Perfil dos clientes
- Estatísticas demográficas
- Características do público

### 7. CTA Final
- Formulário de captação
- Modal com iFrame
- Qualificação de leads

### 8. Footer
- Informações de contato
- Redes sociais
- Links importantes

## ⚡ Funcionalidades JavaScript

### Navegação
- Smooth scroll para links internos
- Menu mobile responsivo
- Header com efeito de scroll

### Modal
- Abertura/fechamento suave
- Foco automático para acessibilidade
- Fechamento com ESC e overlay
- Preparado para iFrame

### Animações
- Intersection Observer para scroll
- Animações de entrada
- Efeitos hover
- Parallax suave

### Performance
- Lazy loading de imagens
- Debounce/throttle para eventos
- Otimização de scroll

## 🎯 Conversão

### CTAs Principais
- "Solicitar Proposta" (Header)
- "Falar com Especialista" (Hero)
- "Solicitar Proposta Personalizada" (CTA Final)

### Formulário de Lead
- Modal responsivo
- Preparado para iFrame
- Qualificação automática
- Campos sugeridos:
  - CNPJ
  - Faturamento médio
  - Número de funcionários CLT

## 📊 Métricas de Sucesso

- Taxa de conversão de visitantes em leads
- Qualidade dos leads capturados
- Tempo de permanência na página
- Taxa de clique nos CTAs
- Bounce rate

## 🚀 Como Usar

### 1. Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Navegue para a pasta
cd landing_FMI

# Abra o arquivo index.html no navegador
```

### 2. Personalização
- Edite as cores no arquivo `css/main.css` (variáveis CSS)
- Modifique o conteúdo no `index.html`
- Ajuste os estilos nos arquivos CSS dos blocos

### 3. Integração do iFrame
```javascript
// Para carregar o formulário no modal
window.FMILanding.loadIframe('URL_DO_SEU_FORMULARIO');
```

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

### Características
- Mobile-first approach
- Grid responsivo
- Imagens adaptativas
- Menu mobile otimizado

## ♿ Acessibilidade

- Navegação por teclado
- Skip links
- ARIA labels
- Contraste adequado
- Foco visível
- Screen reader friendly

## 📈 SEO

- Meta tags otimizadas
- Estrutura semântica
- Open Graph tags
- Schema markup
- URLs amigáveis
- Performance otimizada

## 🔍 Analytics

### Google Analytics 4
```javascript
// Tracking de CTAs
gtag('event', 'click', {
    'event_category': 'CTA',
    'event_label': 'button_id',
    'value': 1
});
```

### Facebook Pixel
```javascript
// Tracking de leads
fbq('track', 'Lead', {
    content_name: 'button_id',
    content_category: 'CTA'
});
```

## 🛠️ Desenvolvimento

### Metodologia BEM

#### Estrutura de Classes
```css
.block {}
.block__element {}
.block__element--modifier {}
```

#### Organização de Arquivos
- **Arquivo principal**: `css/main.css` com `@import` para todos os blocos
- **Blocos modulares**: Cada componente em arquivo separado
- **HTML**: Apenas um `<link>` para o arquivo principal

#### Vantagens desta Abordagem
- **Manutenibilidade**: Fácil localização e edição de componentes
- **Escalabilidade**: Novos blocos podem ser adicionados facilmente
- **Performance**: Menos requisições HTTP (apenas um arquivo CSS)
- **Organização**: Estrutura clara e lógica

## 📝 Próximos Passos

1. **Integração do iFrame**: Adicionar URL do formulário
2. **Analytics**: Configurar GA4 e Facebook Pixel
3. **Testes**: A/B testing de CTAs
4. **Otimização**: Performance e SEO
5. **Monitoramento**: Métricas de conversão

## 📞 Contato

- **Email**: contato@fmicontabilidade.com.br
- **Site**: https://fmicontabilidade.com.br
- **Regiões**: SP, MG, ES, BA, DF

## 📄 Licença

Este projeto foi desenvolvido por Gamarinho através da agência de marketing Oncet Company para a FMI Contabilidade Consultiva.

---

**Desenvolvido com ❤️ para captar leads qualificados** 