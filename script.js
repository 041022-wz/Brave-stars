// ============================================================
// Brave-Stars · Interactive Scripts
// ============================================================

// 等待页面加载完成后再执行，确保所有 DOM 元素都已存在
document.addEventListener('DOMContentLoaded', function() {

    // ----- 获取按钮元素 -----
    // 注意：这些 id 需要在 index.html 中对应的按钮上定义
    const btnSpecialEducation = document.getElementById('btnSpecialEducation');
    const btnCommunity = document.getElementById('btnCommunity');
    const btnChatAI = document.getElementById('btnChatAI');

    // ----- Special Education 按钮 -----
    if (btnSpecialEducation) {
        btnSpecialEducation.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认跳转（如果有 href）
            // 跳转到特殊教育页面
            window.location.href = 'special-education.html';
        });
    }

    // ----- Community 按钮 -----
    if (btnCommunity) {
        btnCommunity.addEventListener('click', function(event) {
            event.preventDefault();
            // 使用更友好的提示框（模拟）
            // 这里可以换成 Bootstrap Modal 或自定义弹窗
            alert('🌟 Welcome to the Brave-Stars Community!\n\nShare experiences, ask questions, and grow together with educators worldwide.');
            // 未来可以替换为：window.location.href = 'community.html';
        });
    }

    // ----- AI Chat 按钮 -----
    if (btnChatAI) {
        btnChatAI.addEventListener('click', function(event) {
            event.preventDefault();
            alert('💬 Be Happy!\n\nYou are about to start a conversation with Affective AI.\nThis feature is coming soon in the next version.');
            // 未来可以替换为：window.location.href = 'chatbox.html';
        });
    }

    // ----- 额外的交互效果：控制台输出欢迎信息（仅供开发者查看）-----
    console.log('⭐ Brave-Stars · Special Education Platform');
    console.log('Built with ❤️ for inclusive education.');

});
