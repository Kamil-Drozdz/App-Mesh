export const data = {
  labels: ['completed Tickets', 'not completed Tickets'],
  datasets: [
    {
      data: [92, 8],
      backgroundColor: ['rgb(100,92,208, 1)', 'rgba(255, 255, 255 ,1)'],
      borderColor: ['rgba(255, 255, 255 ,1)', 'rgba(255, 255, 255 ,1)'],
    },
  ],
};

export const options = {
  scales: {
    y: {
      title: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },

    x: {
      title: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    responsive: true,
    legend: {
      display: false,
    },
  },

  tooltip: {
    enabled: false,
  },
  cutoutPercentage: 90,
};
