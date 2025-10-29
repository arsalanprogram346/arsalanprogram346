// popup.js - منطق popup افزونه

document.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('actionBtn');
  const optionsBtn = document.getElementById('optionsBtn');
  const statusDiv = document.getElementById('status');

  // نمایش پیام وضعیت
  function showStatus(message, type = 'info') {
    statusDiv.textContent = message;
    statusDiv.className = `status-message show ${type}`;
    
    setTimeout(() => {
      statusDiv.className = 'status-message';
    }, 3000);
  }

  // دکمه اقدام اصلی
  actionBtn.addEventListener('click', async () => {
    try {
      // دریافت تب فعال
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      // اجرای یک عمل بر روی تب فعال
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          alert('سلام! این یک پیام از افزونه است!');
        }
      });

      showStatus('عملیات با موفقیت انجام شد!', 'success');
    } catch (error) {
      console.error('خطا:', error);
      showStatus('خطایی رخ داد: ' + error.message, 'error');
    }
  });

  // دکمه تنظیمات
  optionsBtn.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });

  // بارگذاری تنظیمات ذخیره شده
  chrome.storage.sync.get(['userSettings'], (result) => {
    if (result.userSettings) {
      console.log('تنظیمات بارگذاری شد:', result.userSettings);
    }
  });
});
