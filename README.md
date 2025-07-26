# 🔐 Password Generator App (React + Tailwind)

A simple and elegant password generator built with **React** and styled using **Tailwind CSS**.  
This app allows users to generate secure passwords, customize password options, and store recent passwords locally.

---

## 🌟 Features

- ✅ Choose password length (up to 50 characters)
- ✅ Include lowercase, uppercase, numbers, and symbols
- ✅ Copy to clipboard functionality
- ✅ Save and display up to 10 previous passwords
- ✅ Clear all saved passwords
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth UX with visual feedback

---

## 🧩 Technologies Used

- **React** (Vite)
- **Tailwind CSS**
- **Local Storage**
- **React Icons**

---

## 📸 Screenshots

> 📷 See the `/assets/screenshots/` folder for app previews.  
App UI includes password input settings, generated result display, and history list.

---

## 🧠 How It Works

1. Select password length using the slider
2. Choose which character types to include
3. Click **Generate Password**
4. Password is shown and saved
5. You can copy it with a single click or clear saved ones

---

## 🗂 Project Structure (src/)

```bash
src/
├── components/
│   ├── PasswordLengthInput.jsx
│   ├── CheckboxGroup.jsx
│   ├── GenerateButton.jsx
│   ├── PasswordOutput.jsx
│   ├── CopyButton.jsx
│   ├── SavedPasswords.jsx
│   └── CustomCheckbox.jsx
├── PasswordGenerator.jsx
├── App.jsx
└── main.jsx
