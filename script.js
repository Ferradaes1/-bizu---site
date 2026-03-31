  // Hero chart
  const chart = document.getElementById('heroChart');
  [25,38,32,55,42,70,52,88,65,100].forEach((h,i) => {
    const b = document.createElement('div');
    b.className = 'hv-bar' + (i>=7?' y':i>=5?' yh':'');
    b.style.height = h+'%';
    chart.appendChild(b);
  });

  // Clients carousel
  const clients = [
    {av:'RI',name:'Rangel Imóveis',sector:'Imobiliário',badge:'Gestão de Redes',q:'"Presença digital que transmite confiança. A éBizu entendeu exatamente o que nossa marca precisava."',v1:'📲',l1:'Redes geridas',v2:'🏠',l2:'Imobiliário'},
    {av:'LB',name:'Low Back',sector:'Assessoria',badge:'Social Media',q:'"Conteúdo alinhado ao nosso público, entregue com consistência. Calendário organizado, zero estresse."',v1:'📅',l1:'Calendário',v2:'🎯',l2:'Estratégia'},
    {av:'VY',name:'VYK Engenharia',sector:'Engenharia',badge:'Design Digital',q:'"Artes que representam nossa marca com profissionalismo. Identidade visual fortalecida de verdade."',v1:'🎨',l1:'Design',v2:'💡',l2:'Identidade'},
    {av:'IP',name:'Instituto Paulinho',sector:'Educação & Cultura',badge:'Gestão de Redes',q:'"A éBizu conectou nosso instituto com a comunidade de um jeito humano e estratégico."',v1:'👥',l1:'Comunidade',v2:'📲',l2:'Alcance'},
    {av:'SA',name:'SUAncestral',sector:'Cultura & Bem-estar',badge:'Conteúdo',q:'"Conteúdo real, direto e alinhado ao que nosso público espera ver. A éBizu entrega de verdade."',v1:'✨',l1:'Conteúdo',v2:'🤝',l2:'Conexão'},
    {av:'DC',name:'Da Cor ao Caso',sector:'Serviços',badge:'Social Media',q:'"Gestão humanizada, criativa e estratégica. Nossa marca ficou exatamente como queríamos."',v1:'🎯',l1:'Estratégia',v2:'📈',l2:'Crescimento'},
    {av:'AC',name:'Ana Christina Tavares',sector:'Personal Brand',badge:'Posicionamento',q:'"Minha marca pessoal ganhou consistência e identidade clara. A equipe foi incrível do início ao fim."',v1:'💛',l1:'Marca pessoal',v2:'🌟',l2:'Posicionamento'},
    {av:'ET',name:'Engetec Empreend.',sector:'Construção Civil',badge:'Design Digital',q:'"Design profissional que transmite a credibilidade que nossa empresa precisa no mercado."',v1:'🏗️',l1:'Mercado',v2:'📊',l2:'Presença'},
    {av:'NG',name:'Instituto N. Guitler',sector:'Saúde & Educação',badge:'Gestão de Redes',q:'"Presença nas redes que fortalece nossa missão e chega às pessoas certas com a mensagem certa."',v1:'💚',l1:'Missão',v2:'📣',l2:'Alcance'},
    {av:'AM',name:'Anita Machado',sector:'Personal Brand',badge:'Social Media',q:'"A éBizu transformou minha presença digital. Agora minha marca fala por si antes de eu abrir a boca."',v1:'🌟',l1:'Posicionamento',v2:'📲',l2:'Engajamento'},
  ];
  const track = document.getElementById('casesTrack');
  [...clients,...clients].forEach(c => {
    track.innerHTML += `<div class="case-card">
      <div class="case-top">
        <div class="case-client">
          <div class="case-av">${c.av}</div>
          <div><div class="case-n">${c.name}</div><div class="case-s">${c.sector}</div></div>
        </div>
        <span class="case-badge">${c.badge}</span>
      </div>
      <p class="case-q">${c.q}</p>
      <div class="case-nums">
        <div class="case-num"><div class="case-num-v">${c.v1}</div><div class="case-num-l">${c.l1}</div></div>
        <div class="case-num"><div class="case-num-v">${c.v2}</div><div class="case-num-l">${c.l2}</div></div>
      </div>
    </div>`;
  });

  // Form helpers
  function getDados() {
    return {
      nome:     document.getElementById('f-nome').value.trim(),
      wpp:      document.getElementById('f-wpp').value.trim(),
      email:    document.getElementById('f-email').value.trim(),
      empresa:  document.getElementById('f-empresa').value.trim(),
      segmento: document.getElementById('f-segmento').value,
      msg:      document.getElementById('f-msg').value.trim(),
      servicos: [...document.querySelectorAll('.check-group input:checked')].map(c => c.value)
    };
  }

  function validar(d) { return d.nome && d.wpp && d.empresa && d.segmento; }

  function mostrarErro(v) {
    document.getElementById('form-error').style.display = v ? 'block' : 'none';
  }

  function enviarWhatsApp() {
    const d = getDados();
    if (!validar(d)) { mostrarErro(true); return; }
    mostrarErro(false);
    const svc = d.servicos.length ? d.servicos.join(', ') : 'Não informado';
    const txt = [
      ' Olá, éBizu! Vim pelo site e quero conversar sobre meu projeto:',
      '',
      ` *Nome:* ${d.nome}`,
      `*WhatsApp:* ${d.wpp}`,
      d.email ? ` *E-mail:* ${d.email}` : '',
      ` *Empresa:* ${d.empresa}`,
      ` *Segmento:* ${d.segmento}`,
      ` *Preciso de:* ${svc}`,
      d.msg ? `\n *Sobre a marca:*\n${d.msg}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/5521993957278?text=${encodeURIComponent(txt)}`, '_blank');
  }

  function enviarEmail() {
    const d = getDados();
    if (!validar(d)) { mostrarErro(true); return; }
    mostrarErro(false);
    const svc = d.servicos.length ? d.servicos.join(', ') : 'Não informado';
    const assunto = `[éBizu Site] ${d.empresa} — ${d.segmento}`;
    const corpo = [
      'Nova solicitação de diagnóstico via site:',
      '',
      `Nome: ${d.nome}`,
      `WhatsApp: ${d.wpp}`,
      d.email ? `E-mail: ${d.email}` : '',
      `Empresa: ${d.empresa}`,
      `Segmento: ${d.segmento}`,
      `Serviços de interesse: ${svc}`,
      d.msg ? `\nSobre a marca:\n${d.msg}` : '',
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:ebizumarketingdigital@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  }

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.sr').forEach(el => obs.observe(el));
