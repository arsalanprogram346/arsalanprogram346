# افزونه مرورگر

این یک افزونه مرورگر ساده است که می‌توانید آن را برای Chrome، Edge و Firefox استفاده کنید.

## ساختار پروژه

```
extension/
├── manifest.json       # فایل تنظیمات افزونه (Manifest V3)
├── popup.html          # صفحه popup افزونه
├── popup.css           # استایل popup
├── popup.js            # منطق popup
├── background.js       # Service Worker
├── content.js          # Content Script
├── options.html        # صفحه تنظیمات
├── options.css         # استایل صفحه تنظیمات
├── options.js          # منطق صفحه تنظیمات
└── icons/              # آیکون‌های افزونه
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## نحوه نصب و استفاده

### Chrome / Edge

1. فایل `extension` را باز کنید
2. به مسیر `chrome://extensions/` یا `edge://extensions/` بروید
3. حالت "Developer mode" را فعال کنید
4. روی "Load unpacked" کلیک کنید
5. پوشه `extension` را انتخاب کنید

### Firefox

1. فایل `extension` را باز کنید
2. به مسیر `about:debugging#/runtime/this-firefox` بروید
3. روی "Load Temporary Add-on" کلیک کنید
4. فایل `manifest.json` را انتخاب کنید

## ویژگی‌ها

- ✅ Popup رابط کاربری
- ✅ Background Service Worker
- ✅ Content Script برای تعامل با صفحات وب
- ✅ صفحه تنظیمات
- ✅ ذخیره تنظیمات با Chrome Storage API

## توسعه

برای توسعه و تغییر افزونه:

1. فایل‌های مورد نظر را ویرایش کنید
2. در صفحه `chrome://extensions/` روی دکمه "Reload" کلیک کنید
3. تغییرات را تست کنید

## مجوزها (Permissions)

- `activeTab`: دسترسی به تب فعال
- `storage`: ذخیره تنظیمات

## نکات

- این افزونه از Manifest V3 استفاده می‌کند
- برای ساخت آیکون‌ها می‌توانید از ابزارهای آنلاین استفاده کنید
- محتوای `content.js` در تمام صفحات وب اجرا می‌شود
