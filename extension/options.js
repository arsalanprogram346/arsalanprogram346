// options.js - منطق صفحه تنظیمات

document.addEventListener('DOMContentLoaded', () => {
  const enabledCheckbox = document.getElementById('enabled');
  const themeSelect = document.getElementById('theme');
  const saveBtn = document.getElementById('saveBtn');
  const statusDiv = document.getElementById('status');

  // بارگذاری تنظیمات ذخیره شده
  chrome.storage.sync.get(['userSettings'], (result) => {
    const settings = result.userSettings || {
      enabled: true,
      theme: 'default'
    };

    enabledCheckbox.checked = settings.enabled;
    themeSelect.value = settings.theme;
  });

  // ذخیره تنظیمات
  saveBtn.addEventListener('click', () => {
    const settings = {
      enabled: enabledCheckbox.checked,
      theme: themeSelect.value
    };

    chrome.storage.sync.set({ userSettings: settings }, () => {
      showStatus('تنظیمات با موفقیت ذخیره شد!', 'success');
    });
  });

  // نمایش پیام وضعیت
  function showStatus(message, type = 'info') {
    statusDiv.textContent = message;
    statusDiv.className = `status-message show ${type}`;
    
    setTimeout(() => {
      statusDiv.className = 'status-message';
    }, 3000);
  }
});
