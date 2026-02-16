// 简化版本 - 直接显示内容，不需要复杂动画
const loadCustomData = () => {
  fetch("customize.json")
    .then(response => response.json())
    .then(data => {
      // 更新所有文本内容
      Object.keys(data).forEach(key => {
        const element = document.querySelector(`[data-node-name="${key}"]`);
        if (element && data[key]) {
          if (key === "imagePath") {
            element.src = `img/${data[key]}`;
          } else {
            element.textContent = data[key];
          }
        }
      });
      
      // 显示容器
      document.querySelector('.container').style.visibility = 'visible';
      document.querySelector('.container').style.opacity = '1';
      
      // 3秒后触发烟花
      setTimeout(() => {
        fireConfetti();
      }, 3000);
    })
    .catch(error => {
      console.error('加载配置失败:', error);
      // 即使失败也显示页面
      document.querySelector('.container').style.visibility = 'visible';
      document.querySelector('.container').style.opacity = '1';
    });
};

// 烟花效果
const fireConfetti = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
};

// 重播按钮
document.addEventListener('DOMContentLoaded', () => {
  loadCustomData();
  
  const replayBtn = document.getElementById('replay');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      location.reload();
    });
  }
});

