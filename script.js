// ============================================================
// Brave-Stars · Interactive Scripts
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // ----- 控制台欢迎信息） -----
    console.log('⭐ Brave-Stars · Special Education Platform');
    console.log('📚 Built with ❤️ for inclusive education.');
    console.log('🔗 https://041022-wz.github.io/brave-stars/');

    // ----- 可选：页面加载完成后自动弹出第一个 Modal -----
    // 如果想让招生官一进页面就看到 Special Education 的 Modal，可以取消下面代码的注释
    // 但为了用户体验，建议让用户主动点击触发

    /*
    setTimeout(function() {
        const firstModal = new bootstrap.Modal(document.getElementById('modalSpecialEducation'));
        firstModal.show();
    }, 1500);
    */

    // ----- 可选：监听 Modal 打开/关闭事件（用于数据分析或日志） -----
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modalEl) {
        modalEl.addEventListener('shown.bs.modal', function(event) {
            const modalId = event.target.id;
            console.log(`📊 Modal opened: ${modalId}`);
        });

        modalEl.addEventListener('hidden.bs.modal', function(event) {
            const modalId = event.target.id;
            console.log(`📊 Modal closed: ${modalId}`);
        });
    });

    console.log('✅ Brave-Stars is ready!');
});
