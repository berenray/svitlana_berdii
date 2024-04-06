window.addEventListener('DOMContentLoaded', () => {
    const reloadFlag = localStorage.getItem('reloadFlag');

    if (!reloadFlag) {
        localStorage.setItem('reloadFlag', 'true');
        location.reload();
    } else {
        localStorage.removeItem('reloadFlag'); // Опционально, чтобы удалить флаг после первой загрузки
    }
  });

