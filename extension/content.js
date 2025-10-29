// content.js - Content Script که در صفحات وب اجرا می‌شود

(function() {
  'use strict';

  console.log('Content Script بارگذاری شد');

  // مثال: افزودن یک دکمه به صفحه
  function addButtonToPage() {
    // بررسی می‌کنیم که آیا قبلاً دکمه اضافه شده یا نه
    if (document.getElementById('extension-button')) {
      return;
    }

    const button = document.createElement('button');
    button.id = 'extension-button';
    button.textContent = 'افزونه من';
    button.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      padding: 10px 20px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      z-index: 10000;
      font-size: 14px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;

    button.addEventListener('click', () => {
      alert('سلام از افزونه!');
      // ارسال پیام به background script
      chrome.runtime.sendMessage({
        action: 'buttonClicked',
        url: window.location.href
      });
    });

    document.body.appendChild(button);
  }

  // اجرای کد وقتی DOM آماده باشد
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addButtonToPage);
  } else {
    addButtonToPage();
  }

  // گوش دادن به پیام‌های ارسال شده از background script یا popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'execute') {
      // انجام عملیات مورد نیاز
      sendResponse({ success: true, message: 'عملیات انجام شد' });
    }
    return true;
  });

})();
