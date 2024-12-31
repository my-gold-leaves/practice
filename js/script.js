// script.js
// 如果需要动态功能，比如搜索框的事件处理，可以在这里添加
document.querySelector('.nav-right input[type="text"]').addEventListener('input', function(e) {
    console.log('Search query:', e.target.value);
});
 // 获取所有的下拉菜单和按钮
 const dropdowns = document.querySelectorAll('.dropdown');
 const buttons = document.querySelectorAll('.dropbtn');
 
 // 为每个按钮添加点击事件
 buttons.forEach(button => {
   button.addEventListener('click', function(event) {
     // 获取按钮所属的下拉菜单
     const dropdown = this.nextElementSibling;
 
     // 隐藏所有下拉菜单
     dropdowns.forEach(dropdown => {
       dropdown.querySelector('.dropdown-content').style.display = 'none';
     });
 
     // 显示当前按钮对应的下拉菜单
     dropdown.style.display = 'block';
   });
 });
// 倒计时
 function updateCountdown(elementId, totalSeconds) {
  var now = new Date().getTime();
  var difference = totalSeconds - (now / 1000);

  if (difference < 0) {
    clearInterval(interval);
    document.getElementById(elementId).innerHTML = 'Sale started!';
    return;
  }

  var days = Math.floor(difference / (60 * 60 * 24));
  var hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((difference % (60 * 60)) / 60);
  var seconds = Math.floor(difference % 60);

  document.getElementById(elementId).innerHTML = days + ' ' + hours + ' ' + minutes + ' ' + seconds;
}

updateCountdown('countdown1', 6 * 24 * 60 * 60 + 19 * 60 * 60 + 24 * 60);
updateCountdown('countdown2', 3 * 24 * 60 * 60 + 19 * 60 * 60 + 24 * 60);

var interval = setInterval(function() {
  updateCountdown('countdown1', 6 * 24 * 60 * 60 + 19 * 60 * 60 + 24 * 60);
  updateCountdown('countdown2', 3 * 24 * 60 * 60 + 19 * 60 * 60 + 24 * 60);
}, 1000);

// 使用fetch API获取JSON数据
document.addEventListener('DOMContentLoaded', function() {
  fetch('games.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(games => {
      const container = document.getElementsByClassName('games-container');
      games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'games-item';

        const gameImg = document.createElement('img');
        gameImg.src = game.image;
        gameImg.alt = game.name;

        const gameInfo = document.createElement('div');
        gameInfo.className = 'games-info';

        const gameName = document.createElement('h2');
        gameName.textContent = game.name;

        const gameDesc = document.createElement('p');
        gameDesc.textContent = game.description;

        gameInfo.appendChild(gameName);
        gameInfo.appendChild(gameDesc);

        gameItem.appendChild(gameImg);
        gameItem.appendChild(gameInfo);

        container.appendChild(gameItem);
      });
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
});
//使用vue,设置点赞
import {createApp} from 'vue';
const app = createApp({
  data() {
    return {
      count: 34000
    }
  }
});
app.mount('#app');