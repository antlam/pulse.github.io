/**
 * Chart.js initializations for Jane Pulse
 * Requires Chart.js to be loaded (e.g. via CDN) before this script.
 */
(function () {
  function initCharts() {
    if (typeof Chart === 'undefined') return;

    // Produced revenue vs collected revenue
    const revenueCanvas = document.getElementById('revenueChart');
    if (revenueCanvas) {
      const ctx = revenueCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Produced revenue',
              data: [42000, 38500, 45100, 39800, 46500, 44200],
              backgroundColor: 'rgba(0, 193, 202, 0.7)',
              borderColor: 'rgb(0, 177, 184)',
              borderWidth: 1
            },
            {
              label: 'Collected revenue',
              data: [39800, 36200, 42100, 38100, 44100, 41800],
              backgroundColor: 'rgba(51, 214, 83, 0.7)',
              borderColor: 'rgb(37, 182, 80)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return '$' + (value / 1000) + 'k';
                }
              }
            }
          }
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
  } else {
    initCharts();
  }
})();
