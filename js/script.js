/* ===================================
   JavaScript - 31 Dias de Provérbios
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Data: 31 Days of Content
    // ===================================
    const daysData = [
        {
            day: 1,
            category: 'gestao',
            proverb: 'Provérbios 16:3 - "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos."',
            lesson: 'Comece seu dia dedicando seu trabalho a Deus. Planeje suas atividades com oração e intenção.',
            tool: 'Trello',
            toolUrl: 'https://trello.com',
            toolDesc: 'Ferramenta gratuita de gestão de tarefas e projetos com quadros visuais.'
        },
        {
            day: 2,
            category: 'lideranca',
            proverb: 'Provérbios 27:17 - "Assim como o ferro afia o ferro, o homem afia o seu companheiro."',
            lesson: 'Cerque-se de pessoas que te desafiam a crescer. Networking é essencial para o empreendedor.',
            tool: 'LinkedIn',
            toolUrl: 'https://linkedin.com',
            toolDesc: 'Rede social profissional para conectar-se com outros empreendedores e líderes.'
        },
        {
            day: 3,
            category: 'financas',
            proverb: 'Provérbios 21:5 - "Os planos bem elaborados levam à fartura; mas o apressado sempre acaba na miséria."',
            lesson: 'Planejamento financeiro é crucial. Não tome decisões financeiras por impulso.',
            tool: 'Planilhas Google',
            toolUrl: 'https://sheets.google.com',
            toolDesc: 'Ferramenta gratuita para controle financeiro e planejamento orçamentário.'
        },
        {
            day: 4,
            category: 'marketing',
            proverb: 'Provérbios 22:1 - "Mais digno de ser escolhido é o bom nome do que as muitas riquezas."',
            lesson: 'Construa uma marca forte e confiável. Sua reputação é seu maior ativo.',
            tool: 'Canva',
            toolUrl: 'https://canva.com',
            toolDesc: 'Ferramenta gratuita de design para criar conteúdo visual profissional.'
        },
        {
            day: 5,
            category: 'gestao',
            proverb: 'Provérbios 18:9 - "Quem negligencia o seu trabalho é irmão do que o destrói."',
            lesson: 'Excelência não é opcional. Dedique-se completamente às suas responsabilidades.',
            tool: 'Notion',
            toolUrl: 'https://notion.so',
            toolDesc: 'Plataforma all-in-one para organização, notas e gestão de conhecimento.'
        },
        {
            day: 6,
            category: 'lideranca',
            proverb: 'Provérbios 15:22 - "Os planos fracassam por falta de conselho, mas são bem-sucedidos quando há muitos conselheiros."',
            lesson: 'Busque mentoria e conselhos. Líderes sábios reconhecem que precisam de orientação.',
            tool: 'Discord',
            toolUrl: 'https://discord.com',
            toolDesc: 'Plataforma para criar comunidades e grupos de mastermind gratuitos.'
        },
        {
            day: 7,
            category: 'financas',
            proverb: 'Provérbios 13:11 - "O dinheiro ganho com desonestidade diminuirá, mas quem o ajunta aos poucos terá cada vez mais."',
            lesson: 'Construa riqueza gradualmente. Atalhos éticos comprometem o futuro do negócio.',
            tool: 'Mobills',
            toolUrl: 'https://mobills.com.br',
            toolDesc: 'App brasileiro gratuito para controle financeiro pessoal e empresarial.'
        },
        {
            day: 8,
            category: 'marketing',
            proverb: 'Provérbios 16:21 - "O sábio de coração é chamado inteligente; a suavidade dos lábios aumenta a persuasão."',
            lesson: 'Comunicação clara e persuasiva é fundamental no marketing e vendas.',
            tool: 'Grammarly',
            toolUrl: 'https://grammarly.com',
            toolDesc: 'Ferramenta gratuita para melhorar sua escrita em inglês (útil para conteúdo global).'
        },
        {
            day: 9,
            category: 'gestao',
            proverb: 'Provérbios 24:27 - "Prepare o seu trabalho lá fora; prepare-o cuidadosamente no campo; depois, construa a sua casa."',
            lesson: 'Estabeleça prioridades corretas. Primeiro o essencial, depois o complementar.',
            tool: 'Google Calendar',
            toolUrl: 'https://calendar.google.com',
            toolDesc: 'Agenda gratuita para gestão de tempo e compromissos.'
        },
        {
            day: 10,
            category: 'lideranca',
            proverb: 'Provérbios 29:2 - "Quando os justos triunfam, há grande alegria; quando os ímpios governam, o povo geme."',
            lesson: 'Liderança ética traz prosperidade. Governe com integridade e justiça.',
            tool: 'Slack',
            toolUrl: 'https://slack.com',
            toolDesc: 'Plataforma de comunicação para equipes com plano gratuito disponível.'
        },
        {
            day: 11,
            category: 'financas',
            proverb: 'Provérbios 22:7 - "O rico domina sobre o pobre; quem toma emprestado é escravo de quem empresta."',
            lesson: 'Evite dívidas desnecessárias. Alavancagem pode ser útil, mas use com sabedoria.',
            tool: 'Calculadora do Cidadão (Banco Central)',
            toolUrl: 'https://www.bcb.gov.br/calculadora',
            toolDesc: 'Ferramenta oficial para cálculos financeiros e conversão de moedas.'
        },
        {
            day: 12,
            category: 'marketing',
            proverb: 'Provérbios 18:16 - "A dádiva do homem lhe alarga o caminho e o leva à presença dos grandes."',
            lesson: 'Ofereça valor primeiro. Marketing de conteúdo gera autoridade e oportunidades.',
            tool: 'Medium',
            toolUrl: 'https://medium.com',
            toolDesc: 'Plataforma gratuita para publicar artigos e construir autoridade.'
        },
        {
            day: 13,
            category: 'gestao',
            proverb: 'Provérbios 20:18 - "Os planos são preparados pelo conselho; com sábia deliberação faça guerra."',
            lesson: 'Decisões estratégicas devem ser tomadas com consulta e reflexão.',
            tool: 'Miro',
            toolUrl: 'https://miro.com',
            toolDesc: 'Quadro branco online colaborativo para brainstorming e planejamento.'
        },
        {
            day: 14,
            category: 'lideranca',
            proverb: 'Provérbios 11:14 - "Para a vitória há segurança no multitudine de conselheiros."',
            lesson: 'Crie um conselho consultivo. Diversidade de perspectivas fortalece decisões.',
            tool: 'Zoom',
            toolUrl: 'https://zoom.us',
            toolDesc: 'Videoconferência gratuita para reuniões com conselheiros e equipe.'
        },
        {
            day: 15,
            category: 'financas',
            proverb: 'Provérbios 28:22 - "O invejoso corre atrás do dinheiro, sem saber que a pobreza o espera."',
            lesson: 'Não compare seu sucesso com o dos outros. Foque na sua jornada financeira.',
            tool: 'Investidor10',
            toolUrl: 'https://investidor10.com.br',
            toolDesc: 'Plataforma gratuita para análise de investimentos na bolsa brasileira.'
        },
        {
            day: 16,
            category: 'marketing',
            proverb: 'Provérbios 15:23 - "O homem se alegra em dar resposta adequada, e quão bom é a palavra dita a seu tempo!"',
            lesson: 'Timing é tudo no marketing. Publique conteúdo no momento certo.',
            tool: 'Buffer',
            toolUrl: 'https://buffer.com',
            toolDesc: 'Agendador de posts para redes sociais com plano gratuito.'
        },
        {
            day: 17,
            category: 'gestao',
            proverb: 'Provérbios 14:22 - "Não percam os que praticam o mal? Certamente aqueles que planejam o mal se perderão."',
            lesson: 'Evite parcerias questionáveis. Associe-se apenas com pessoas íntegras.',
            tool: 'DocuSign',
            toolUrl: 'https://docusign.com',
            toolDesc: 'Assinatura eletrônica gratuita para documentos e contratos.'
        },
        {
            day: 18,
            category: 'lideranca',
            proverb: 'Provérbios 13:20 - "Quem anda com os sábios será cada vez mais sábio, mas o companheiro dos tolos acabará mal."',
            lesson: 'Invista em desenvolvimento pessoal. Leia, estude e aprenda continuamente.',
            tool: 'Coursera',
            toolUrl: 'https://coursera.org',
            toolDesc: 'Cursos online gratuitos de universidades renomadas mundialmente.'
        },
        {
            day: 19,
            category: 'financas',
            proverb: 'Provérbios 19:17 - "Quem se compadece do pobre empresta ao Senhor, e ele o recompensará."',
            lesson: 'Generosidade atrai prosperidade. Doe e contribua com sua comunidade.',
            tool: 'Kickante',
            toolUrl: 'https://kickante.com.br',
            toolDesc: 'Plataforma brasileira de crowdfunding para causas e projetos.'
        },
        {
            day: 20,
            category: 'marketing',
            proverb: 'Provérbios 25:11 - "Como maçãs de ouro em saliências de prata, assim é a palavra dita a seu tempo."',
            lesson: 'Qualidade supera quantidade. Conteúdo valioso tem mais impacto.',
            tool: 'AnswerThePublic',
            toolUrl: 'https://answerthepublic.com',
            toolDesc: 'Ferramenta gratuita para pesquisa de palavras-chave e ideias de conteúdo.'
        },
        {
            day: 21,
            category: 'gestao',
            proverb: 'Provérbios 16:9 - "Em seu coração o homem planeja o seu caminho, mas o Senhor determina os seus passos."',
            lesson: 'Planeje, mas esteja aberto a ajustes. Flexibilidade é virtude empreendedora.',
            tool: 'Asana',
            toolUrl: 'https://asana.com',
            toolDesc: 'Gestão de projetos e tarefas com plano gratuito para até 15 pessoas.'
        },
        {
            day: 22,
            category: 'lideranca',
            proverb: 'Provérbios 27:23 - "Procure conhecer as suas ovelhas; cuide bem dos seus rebanhos."',
            lesson: 'Conheça sua equipe e clientes. Atenção aos detalhes faz a diferença.',
            tool: 'Typeform',
            toolUrl: 'https://typeform.com',
            toolDesc: 'Criação de formulários e pesquisas elegantes com versão gratuita.'
        },
        {
            day: 23,
            category: 'financas',
            proverb: 'Provérbios 30:25 - "As formigas não têm força, contudo preparam a sua comida no verão."',
            lesson: 'Reserva de emergência é essencial. Prepare-se para tempos difíceis.',
            tool: 'Tesouro Direto',
            toolUrl: 'https://tesourodireto.com.br',
            toolDesc: 'Plataforma oficial para investir em títulos públicos brasileiros.'
        },
        {
            day: 24,
            category: 'marketing',
            proverb: 'Provérbios 12:18 - "Há quem fale como quem fere com espada, mas a língua dos sábios traz a cura."',
            lesson: 'Comunicação empática constrói relacionamentos duradouros com clientes.',
            tool: 'Hotjar',
            toolUrl: 'https://hotjar.com',
            toolDesc: 'Análise de comportamento de usuários em sites com plano free.'
        },
        {
            day: 25,
            category: 'gestao',
            proverb: 'Provérbios 21:31 - "O cavalo prepara-se para o dia da batalha, mas a vitória vem do Senhor."',
            lesson: 'Prepare-se intensamente, mas confie que resultados vêm de algo maior.',
            tool: 'Loom',
            toolUrl: 'https://loom.com',
            toolDesc: 'Gravação de vídeos rápidos para comunicação assíncrona da equipe.'
        },
        {
            day: 26,
            category: 'lideranca',
            proverb: 'Provérbios 17:27 - "O que tem conhecimento poupa as palavras, e o homem de entendimento é de espírito tranquilo."',
            lesson: 'Líderes sábios ouvem mais do que falam. Pratique a escuta ativa.',
            tool: 'Otter.ai',
            toolUrl: 'https://otter.ai',
            toolDesc: 'Transcrição automática de reuniões com plano gratuito limitado.'
        },
        {
            day: 27,
            category: 'financas',
            proverb: 'Provérbios 11:24 - "Há quem dê generosamente, e vê aumentar suas riquezas; outros retêm o que deveriam dar, e caem na pobreza."',
            lesson: 'Reinvista no negócio e em causas. Generosidade gera abundância.',
            tool: 'Nubank',
            toolUrl: 'https://nubank.com.br',
            toolDesc: 'Conta digital gratuita com boas taxas e controle financeiro integrado.'
        },
        {
            day: 28,
            category: 'marketing',
            proverb: 'Provérbios 14:35 - "O servo que procede prudentemente gozará do favor do rei, mas o que procede vergonhosamente sentirá sua ira."',
            lesson: 'Excelência no atendimento ao cliente é marketing poderoso.',
            tool: 'Zendesk Chat',
            toolUrl: 'https://zendesk.com',
            toolDesc: 'Chat gratuito para atendimento ao cliente em sites.'
        },
        {
            day: 29,
            category: 'gestao',
            proverb: 'Provérbios 4:23 - "Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida."',
            lesson: 'Saúde mental e equilíbrio são fundamentais para sustentabilidade.',
            tool: 'Headspace',
            toolUrl: 'https://headspace.com',
            toolDesc: 'App de meditação com conteúdo gratuito para saúde mental.'
        },
        {
            day: 30,
            category: 'lideranca',
            proverb: 'Provérbios 23:7 - "Pois ele comerá e beberá, mas o coração não estará com você."',
            lesson: 'Autenticidade atrai pessoas certas. Seja genuíno em suas relações.',
            tool: 'Calendly',
            toolUrl: 'https://calendly.com',
            toolDesc: 'Agendamento automático de reuniões com plano básico gratuito.'
        },
        {
            day: 31,
            category: 'gestao',
            proverb: 'Provérbios 3:5-6 - "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas."',
            lesson: 'Fé e trabalho andam juntos. Confie no processo e continue executando.',
            tool: 'GitHub',
            toolUrl: 'https://github.com',
            toolDesc: 'Plataforma gratuita para versionamento e colaboração em projetos.'
        }
    ];

    // ===================================
    // Navigation Scroll Effect
    // ===================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // ===================================
    // Calendar Grid Population
    // ===================================
    const calendarGrid = document.getElementById('calendarGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Get current day of the month (1-31)
    const currentDay = new Date().getDate();

    function getCategoryColor(category) {
        const colors = {
            gestao: 'var(--color-gestao)',
            lideranca: 'var(--color-lideranca)',
            financas: 'var(--color-financas)',
            marketing: 'var(--color-marketing)'
        };
        return colors[category] || 'var(--color-primary)';
    }

    function getCategoryLabel(category) {
        const labels = {
            gestao: 'Gestão',
            lideranca: 'Liderança',
            financas: 'Finanças',
            marketing: 'Marketing'
        };
        return labels[category] || category;
    }

    function renderCalendar(filter = 'all') {
        calendarGrid.innerHTML = '';
        
        let filteredDays = filter === 'all' 
            ? daysData 
            : daysData.filter(day => day.category === filter);
        
        // Filter to show only days up to and including today
        filteredDays = filteredDays.filter(day => day.day <= currentDay);

        filteredDays.forEach(day => {
            const card = document.createElement('div');
            card.className = 'calendar-card reveal';
            card.style.setProperty('--category-color', getCategoryColor(day.category));
            card.setAttribute('data-day', day.day);
            
            card.innerHTML = `
                <span class="calendar-day">Dia ${day.day}</span>
                <h3>${getCategoryLabel(day.category)}</h3>
                <p class="proverb-preview">${day.proverb}</p>
                <div class="tool-preview">
                    <i class="fas fa-tools"></i>
                    <span>${day.tool}</span>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(day));
            calendarGrid.appendChild(card);
        });

        // Re-trigger reveal animation for new cards
        setTimeout(observeRevealElements, 100);
    }

    // Initial render
    renderCalendar();

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderCalendar(this.dataset.filter);
        });
    });

    // ===================================
    // Modal Functionality
    // ===================================
    const modal = document.getElementById('dayModal');
    const modalClose = document.getElementById('modalClose');
    const modalDay = document.getElementById('modalDay');
    const modalCategory = document.getElementById('modalCategory');
    const modalProverb = document.getElementById('modalProverb');
    const modalLesson = document.getElementById('modalLesson');
    const modalTool = document.getElementById('modalTool');
    const modalToolLink = document.getElementById('modalToolLink');

    function openModal(day) {
        modalDay.textContent = `Dia ${day.day}`;
        modalCategory.textContent = getCategoryLabel(day.category);
        modalCategory.style.backgroundColor = getCategoryColor(day.category);
        modalProverb.textContent = day.proverb;
        modalLesson.textContent = day.lesson;
        modalTool.innerHTML = `<strong>${day.tool}:</strong> ${day.toolDesc}`;
        modalToolLink.href = day.toolUrl;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ===================================
    // Reveal Animation on Scroll
    // ===================================
    function observeRevealElements() {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    observeRevealElements();

    // ===================================
    // Form Submission Handler
    // ===================================
    const inscriptionForm = document.getElementById('inscriptionForm');
    
    inscriptionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to a backend
        // For now, we'll show a success message
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Inscrição Enviada!';
        submitBtn.disabled = true;
        
        // Show success feedback
        alert(`Obrigado, ${data.name}! \n\nSua inscrição foi recebida. Em breve você receberá o link para entrar no grupo VIP do WhatsApp.`);
        
        // Reset form
        setTimeout(() => {
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });

    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // Dynamic Year in Footer
    // ===================================
    const yearElements = document.querySelectorAll('.footer-bottom p');
    yearElements.forEach(el => {
        if (el.textContent.includes('©')) {
            el.textContent = el.textContent.replace(/\d{4}/, new Date().getFullYear());
        }
    });

    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c🎉 31 Dias de Provérbios para Empreendedores', 'font-size: 20px; font-weight: bold; color: #d4af37;');
    console.log('%cDesenvolvido com ❤️ por Cristhian', 'font-size: 14px; color: #1e3a5f;');
    console.log('%cBoa sorte na sua jornada empreendedora!', 'font-size: 14px; color: #276749;');
});
