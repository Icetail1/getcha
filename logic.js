// 获取倒计时元素和开始按钮
const countdownElement = document.getElementById('countdown');
const startButton = document.getElementById('startButton');

// 设置倒计时时间（单位：秒）
const countdownTime = 60; // 60秒倒计时

// 定义倒计时函数
function startCountdown() {
    let timeLeft = countdownTime;
    const countdownInterval = setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        countdownElement.textContent = `Countdown: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            takeScreenshot();
        }
    }, 1000);
}

// 定义截图函数
function takeScreenshot() {
    // 使用html2canvas截取整个页面内容
    html2canvas(document.body).then(canvas => {
        // 将截图保存为图片
        const screenshot = canvas.toDataURL('image/png');

        // 创建一个新的img元素来显示截图
        const imgElement = document.createElement('img');
        imgElement.src = screenshot;
        document.body.appendChild(imgElement);

        // 这里可以将截图发送到服务器或者进行其他操作
        // 这里简单示例一个警告框表示截图成功
        alert('Screenshot taken!');
    });
}

// 绑定按钮点击事件，点击按钮开始倒计时
startButton.addEventListener('click', startCountdown);
