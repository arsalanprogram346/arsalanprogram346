// background.js - Service Worker برای افزونه

// نصب افزونه
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('افزونه برای اولین بار نصب شد!');
    // تنظیمات پیش‌فرض
    chrome.storage.sync.set({
      userSettings: {
        enabled: true,
        theme: 'default'
      }
    });
  } else if (details.reason === 'update') {
    console.log('افزونه به‌روزرسانی شد!');
  }
});

// مدیریت کلیک روی آیکون افزونه
chrome.action.onClicked.addListener((tab) => {
  console.log('کاربر روی آیکون افزونه کلیک کرد');
});

// گوش دادن به پیام‌های ارسال شده از content script یا popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getData') {
    // انجام عملیات مورد نیاز
    sendResponse({ success: true, data: 'داده نمونه' });
  }
  
  return true; // حفظ کانال ارتباطی برای پاسخ ناهمزمان
});

// مدیریت تغییر تب
chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log('تب فعال شد:', activeInfo.tabId);
});
