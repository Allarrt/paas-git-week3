document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const btnCheckEdge = document.getElementById('btn-check-edge');
  const btnViewSpec = document.getElementById('btn-view-spec');
  const specSection = document.getElementById('spec-section');
  const metricLatency = document.getElementById('metric-latency');
  const edgeStatusText = document.getElementById('edge-status-text');
  const edgeTimestamp = document.getElementById('edge-timestamp');

  // Theme Management
  const currentTheme = localStorage.getItem('paas-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('paas-theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
    }
  }

  // Live Timestamp
  function updateTimestamp() {
    if (edgeTimestamp) {
      const now = new Date();
      edgeTimestamp.textContent = `Sync: ${now.toLocaleTimeString('id-ID')} WIB`;
    }
  }
  updateTimestamp();
  setInterval(updateTimestamp, 1000);

  // Latency & Edge simulation
  function measureEdgeLatency() {
    if (!metricLatency || !btnCheckEdge) return;
    
    btnCheckEdge.disabled = true;
    btnCheckEdge.textContent = 'Memeriksa...';
    metricLatency.textContent = 'Measuring...';
    
    const startTime = performance.now();
    
    // Simulate ping to edge network
    setTimeout(() => {
      const simulatedLatency = Math.floor(Math.random() * (28 - 12 + 1)) + 12; // 12-28 ms
      metricLatency.textContent = `${simulatedLatency} ms`;
      if (edgeStatusText) {
        edgeStatusText.textContent = `Edge Active (Latensi: ${simulatedLatency}ms)`;
      }
      btnCheckEdge.disabled = false;
      btnCheckEdge.textContent = 'Tes Koneksi Edge';
    }, 450);
  }

  // Initial latency check
  measureEdgeLatency();

  btnCheckEdge.addEventListener('click', () => {
    measureEdgeLatency();
  });

  // Toggle Spec Section
  btnViewSpec.addEventListener('click', () => {
    if (specSection) {
      const isHidden = specSection.classList.contains('hidden');
      if (isHidden) {
        specSection.classList.remove('hidden');
        btnViewSpec.textContent = 'Sembunyikan Spesifikasi';
        specSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        specSection.classList.add('hidden');
        btnViewSpec.textContent = 'Lihat Spesifikasi';
      }
    }
  });
});
