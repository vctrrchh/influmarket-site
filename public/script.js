const tabNames = {
  cadastro: 'Cadastro',
  qrbonus: 'Criação do QRBONUS',
  controle: 'Painel de Controle',
  matchmaking: 'Área de Matchmaking'
};

const topActions = {
  cadastro: 'Novo cadastro',
  qrbonus: 'Nova criação',
  controle: 'Exportar relatório',
  matchmaking: 'Nova busca'
};

document.querySelectorAll('.workspace-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.workspace-tab').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach((item) => item.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
    document.getElementById('breadcrumbArea').textContent = tabNames[tab.dataset.tab];
    document.getElementById('pageTitle').textContent = tabNames[tab.dataset.tab];
    document.getElementById('topAction').textContent = topActions[tab.dataset.tab];
  });
});

document.querySelectorAll('.subtab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const panel = tab.closest('.tab-panel');
    panel.querySelectorAll('.subtab').forEach((item) => item.classList.remove('active'));
    panel.querySelectorAll('.subpanel').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.subtab).classList.add('active');
  });
});
