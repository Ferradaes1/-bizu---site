// Hero chart
const chart = document.getElementById('heroChart');
[25,38,32,55,42,70,52,88,65,100].forEach((h,i) => {
  const b = document.createElement('div');
  b.className = 'hv-bar' + (i>=7?' y':i>=5?' yh':'');
  b.style.height = h+'%';
  chart.appendChild(b);
});

// Cases
const cases = [
  {av:'MM',name:'Moda Monteiro',sector:'Moda & Varejo',badge:'+340%',
   q:'"Em 60 dias nossa comunicação virou outra coisa. O engajamento nunca mais foi o mesmo."',
   v1:'+340%',l1:'Engajamento',v2:'60 dias',l2:'Resultado'},
  {av:'BD',name:'Brito Doces',sector:'Alimentação',badge:'2.5M views',
   q:'"Viralizamos no TikTok com 2.5M views. Vendemos tudo em menos de uma semana."',
   v1:'2.5M',l1:'Views',v2:'+180%',l2:'Vendas'},
  {av:'LW',name:'Lowback',sector:'E-commerce',badge:'ROI 580%',
   q:'"ROI de 580% em tráfego pago. Nunca vi resultado assim. Vale cada centavo."',
   v1:'580%',l1:'ROI',v2:'3x',l2:'Faturamento'},
  {av:'CM',name:'Carla Monteiro',sector:'Serviços',badge:'+200% seg.',
   q:'"Crescemos 200% em seguidores reais — não bots. Clientes que compram de verdade."',
   v1:'+200%',l1:'Seguidores',v2:'#1',l2:'Ranking local'},
  {av:'SA',name:'Studio Arte',sector:'Design & Criação',badge:'+280% leads',
   q:'"Nossa agenda lotou em 45 dias. Nunca tivemos tanta demanda. Surpreendente."',
   v1:'+280%',l1:'Leads',v2:'45 dias',l2:'Para lotar'},
  {av:'TF',name:'TechFlow',sector:'Tecnologia',badge:'4.2x ROAS',
   q:'"ROAS de 4.2x no Google Ads. Escalamos a operação com total confiança."',
   v1:'4.2x',l1:'ROAS',v2:'+120%',l2:'Receita'},
];

const track = document.getElementById('casesTrack');
[...cases,...cases].forEach(c => {
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

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); });
}, {threshold: 0.12});

document.querySelectorAll('.sr').forEach(el => obs.observe(el));