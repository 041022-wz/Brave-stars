// script.js

// 获取按钮元素
const btnSpecialEducation = document.getElementById('btnSpecialEducation');
const btnCommunity = document.getElementById('btnCommunity');
const btnChatAI = document.getElementById('btnChatAI');

// 为按钮添加点击事件监听器
btnSpecialEducation.addEventListener('click', function(event) {
    event.preventDefault(); // 防止默认的链接跳转行为
    // 使用 window.location.href 跳转到新的页面
    window.location.href = 'special-education.html';  // 将页面跳转到 special-education.html
});

btnCommunity.addEventListener('click', function(event) {
    event.preventDefault(); // 防止页面跳转
    alert("You clicked 'Go Ahead' for Community.");
    // 你可以在这里添加更多的操作，如跳转到新的页面或显示更多内容
});

btnChatAI.addEventListener('click', function(event) {
    event.preventDefault(); // 防止页面跳转
    alert("You clicked 'Be Happy' for Chat with Affective AI.");
    // 你可以在这里添加更多的操作，如跳转到新的页面或显示更多内容
});
//如果你希望在点击按钮后跳转到新页面，可以使用 window.location.href = 'URL'; 替代 alert。你也可以通过动态更新页面内容来显示更多的信息，而不仅仅是使用 alert()。