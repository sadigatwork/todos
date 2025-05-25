# 🧑‍💻 Tutorial: تعلم أساسيات Git وGitHub عبر بناء مشروع To-Do List

## ⏱️ المدة التقديرية: 20 دقيقة

## 🎯 الجمهور المستهدف: مبتدئون

## 💡 الأدوات المقترحة:

- VS Code (أو أي محرر نصوص)
- Terminal (Git Bash / Terminal Mac/Linux)
- GitHub حساب مجاني
- متصفح ويب

---

## 🔧 الخطوة 1: إنشاء المشروع محليًا

### 1.1 إنشاء مجلد جديد للتطبيق:

```bash
mkdir todo-app
cd todo-app
```

```bash
touch index.html script.js
```

```html
<!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>قائمة المهام</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4">قائمة المهام</h1>
      <input
        id="taskInput"
        class="w-full border p-2 mb-2"
        placeholder="أدخل مهمة جديدة..."
      />
      <button
        onclick="addTask()"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        إضافة
      </button>
      <ul id="taskList" class="mt-4 list-disc pl-5"></ul>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

```javascript
function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (input.value.trim()) return;

  const li = document.createElement("li");
  li.className = "bg-grey-100 p-2 rounded mb-2";
  li.textContent = input.value.trim();
  taskList.appendChild(li);
  input.value = "";
}
```

---

## 📦 الخطوة 2: إعداد Git محليًا

```bash
git init
git config --global user.name "Elsadig Adam"
git config --global user.email "sadigatwork@gmail.com"

git branch -M main
```

```bash
git add .

git status

git commit -m "أول Commit: إنشاء هيكل التطبيق الأساسي"
```

### 4.1 اذهب إلى [github.com](https://github.com) وأنشئ مستودعًا جديدًا:

- اسم المستودع: `todo-app`
- لا تضع README أو .gitignore أو License الآن
- اضغط "Create repository"

```bash
git remote add origin https://github.com/your-username/todo-app.git

git branch -M main
git push -u origin main
```

## 🛠️ الخطوة 6: تعديل وإضافة ميزة جديدة

```bash
git branch feature/UI
git checkout feature/UI

git add .
git commit -m "Enhanced UI with Tailwind CSS"
```

```bash
git checkout -b feature/add-delete-function
```

```javascript
function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (input.value.trim()) return;

  const li = document.createElement("li");
  li.className = "bg-grey-100 p-2 rounded mb-2";
  li.innerHTML = `
      ${input.value}
      <button onclick="this.parentElement.remove()" class="text-red-500">✕</button>
    `;
  taskList.appendChild(li);
  input.value = "";
}
```

```bash
git add app.js
git status
git commit -m "أضفت زر حذف لكل مهمة"
git branch
git checkout main
git branch
git merge feature/UI
git merge feature/add-delete-function
```

```bash
git push
```

| الوظيفة         | الأمر                                   |
| --------------- | --------------------------------------- |
| إنشاء مستودع    | `git init`                              |
| إضافة ملفات     | `git add .`                             |
| مراجعة الحالة   | `git status`                            |
| حفظ التعديل     | `git commit -m "message"`               |
| ربط مع GitHub   | `git remote add origin URL`             |
| رفع التعديلات   | `git push -u origin main` ثم `git push` |
| تغيير اسم الفرع | `git branch -M main`                    |

---

## 🎁 أدوات مقترحة مجانية

| الأداة                                               | الوصف                                        |
| ---------------------------------------------------- | -------------------------------------------- |
| [Visual Studio Code](https://code.visualstudio.com/) | محرر نصوص قوي ومجاني                         |
| [GitHub Desktop](https://desktop.github.com/)        | واجهة رسومية لإدارة Git بدون استخدام الأوامر |
| [Git Bash](https://git-scm.com/downloads)            | تنفيذ أوامر Git على Windows                  |

---

## 📚 خاتمة

لقد قمت الآن ببناء مشروع بسيط، وقمت بتتبع التعديلات باستخدام Git، ورفعها إلى GitHub. هذه المهارات تشكل الأساس لتطوير البرمجيات بطريقة منظمة ومهنية.

### هل تريد الاستمرار؟

جرب:

- إنشاء فرع جديد (`git branch feature/delete-all`)
- إضافة زر لحذف جميع المهام
- دمج الفرع الجديد مع `main` باستخدام `git merge`

---
