const monitors = {
  ru: {
    title: 'Мониторинг',
    addMonitorButton: 'Добавить',
    tooltip: 'Частота проверки',
    noMonitors: {
      title: 'Добавь свой первый сайт для мониторинга',
      description: 'Мы будем следить за вашим сайтом и уведомим вас, когда он выйдет из строя',
    },
    limit: {
      title: 'Достигнут лимит мониторингов',
      description: 'Чтобы добавить больше сайтов, обновите свой тарифный план',
    },
    actions: {
      pause: 'Остановить',
      delete: 'Удалить',
      start: 'Начать',
    },
    modal: {
      title: 'Добавление мониторинга',
      name: 'Название',
      frequency: 'Частота',
      method: 'Метод',
      submit: 'Добавить',
    },
  },

  en: {
    title: 'Monitor',
    addMonitorButton: 'Add monitor',
    tooltip: 'Monitoring frequency',
    noMonitors: {
      title: 'Create your first monitor',
      description: 'We will keep an eye on your server and call or message you when it goes down',
    },
    limit: {
      title: 'Reached limit monitors',
      description: 'To add more monitoring upgrade your tariff plan',
    },
    actions: {
      pause: 'Pause',
      delete: 'Delete',
      start: 'Start',
    },
    modal: {
      title: 'Create monitor',
      name: 'Name',
      frequency: 'Frequency',
      method: 'Method',
      submit: 'Submit',
    },
  },
};

export default monitors;
