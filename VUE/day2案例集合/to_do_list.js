// celebrate.js

(function () {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);

  // 设置 canvas 样式
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none'; // 确保不会阻止其他元素交互

  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const confettis = []; // 彩带数组

  class Confetti {
      constructor() {
          this.x = Math.random() * canvas.width; // 随机 x 位置
          this.y = canvas.height; // 从底部开始
          this.angle = Math.random() * Math.PI; // 随机角度
          this.speed = Math.random() * 2 + 2; // 随机速度
          this.rotation = 0; // 初始旋转角度
          this.rotationSpeed = (Math.random() - 0.5) * 0.1; // 随机旋转速度
          this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // 随机颜色
          this.size = Math.random() * 8 + 4; // 随机大小
          this.opacity = 1; // 初始不透明度
          this.lifespan = 150 + Math.random() * 100; // 生命周期
          this.type = ['rectangle', 'circle'][Math.floor(Math.random() * 2)]; // 随机类型
      }

      update() {
          this.x += Math.cos(this.angle) * this.speed; // 根据角度移动
          this.y -= Math.sin(this.angle) * this.speed; // 向上移动
          this.rotation += this.rotationSpeed; // 增加旋转
          this.lifespan--;

          if (this.lifespan < 75) {
              this.opacity = this.lifespan / 75; // 渐变消失
          }
      }

      draw() {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.globalAlpha = this.opacity;

          if (this.type === 'rectangle') {
              ctx.fillStyle = this.color;
              ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
          } else if (this.type === 'circle') {
              ctx.fillStyle = this.color;
              ctx.beginPath();
              ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
              ctx.fill();
          }

          ctx.restore();
      }
  }

  function createConfettis(num) {
      for (let i = 0; i < num; i++) {
          confettis.push(new Confetti());
      }
  }

  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布

      for (let i = confettis.length - 1; i >= 0; i--) {
          confettis[i].update();
          confettis[i].draw();

          // 检查彩带是否消失
          if (confettis[i].opacity <= 0 || confettis[i].y < -100 || confettis[i].x < 0 || confettis[i].x > canvas.width) {
              confettis.splice(i, 1);
          }
      }

      // 如果还有彩带，继续动画
      if (confettis.length > 0) {
          requestAnimationFrame(animate);
      } else {
          // 清理所有彩带
          confettis.length = 0; // 确保清空彩带数组
          ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
          // 不移除画布，保持可以再次调用
      }
  }

  // 暴露的函数以供调用
  window.celebrate = function () {
      confettis.length = 0; // 清空之前的彩带
      createConfettis(150); // 创建150条彩带
      animate(); // 开始动画
  };
})();