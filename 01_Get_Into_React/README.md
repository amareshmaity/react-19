# Installation and Setup

Install React on Windows (VS Code) – Step by Step (Beginner)

### **Prerequisites**

* Windows 10 / 11
* Administrator access
* Stable internet connection
* VS Code installed

<br/>

### **STEP 1: Install Node.js (Mandatory)**

React requires **Node.js** and **npm**.

#### Steps:

1. Go to the official site:
   👉 [https://nodejs.org](https://nodejs.org)
2. Download the **LTS (Long Term Support)** version.
3. Run the downloaded `.msi` file.
4. Click **Next → Accept License → Next → Install**
   (Keep **default settings**)

<br/>

### **STEP 2: Verify Node.js & npm Installation**

1. Open **Command Prompt** or **PowerShell**
2. Run the following commands:

    ```bash
    node -v
    npm -v
    ```

#### Expected Output:

* Node version like: `v18.x.x`
* npm version like: `9.x.x`

If versions appear → ✅ Installation successful.

<br/>

### **STEP 3: Open VS Code**

1. Open **Visual Studio Code**
2. Open **Terminal** inside VS Code:

   * Shortcut: `Ctrl + `` (backtick)

<br/>

### **STEP 4: Create a React App Using Vite (Recommended)**

#### 1️⃣ Create React App

Run this command in VS Code terminal:

```bash
npm create vite@latest my-react-app -- --template react
```

* `my-react-app` → app name (must be lowercase)

When prompted:

* Select framework → **React**
* Select variant → **JavaScript**

<br/>

#### 2️⃣ Go Inside Project Folder

```bash
cd my-react-app
```

<br/>

#### 3️⃣ Install Dependencies

```bash
npm install
```

<br/>

#### 4️⃣ Start Development Server

```bash
npm run dev
```

<br/>

#### 5️⃣ Open in Browser

Open browser and visit:

```
http://localhost:5173
```

🎉 **Congratulation!** You have successfully run your first react app. You will see the **React + Vite welcome page**

<br/>

### **STEP 5: Understand Project Structure**

Inside `my-react-app`:

```
my-react-app
│
├── src
│   ├── App.jsx        ← Main React component
│   ├── main.jsx       ← Entry point
│   └── index.css
│
├── public
├── package.json
└── vite.config.js
```

<br/>

### **STEP 6: Write Your First React Code (Small Example)**

### Open:

```
src/App.jsx
```

#### Replace existing code with this:

```jsx
function App() {
  return (
    <div>
      <h1>Hello React 👋</h1>
      <p>This is my first React app</p>
    </div>
  );
}

export default App;
```

Save the file.

👉 Browser updates **automatically** 

<br/>

### **STEP 7: Add State (Small Interactive Example)**

Update `App.jsx`:

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Counter</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
```



<br/>

### **STEP 8: Stop the Server**

To stop the app:

```bash
Ctrl + C
```

<br/>

---

### **Optional: Create React App (CRA – Deprecated)**

⚠️ **Not recommended for new projects**, but still works:

```bash
npx create-react-app reactfirst
cd reactfirst
npm start
```

Use **Vite or Next.js** for modern projects.

---

<br/>

### **Common Beginner Errors & Fixes**

| Error                       | Fix                               |
| --------------------------- | --------------------------------- |
| `node not recognized`       | Restart system after Node install |
| Capital letters in app name | Use lowercase only                |
| `npm run dev` not working   | Run inside project folder         |
| Blank page                  | Check `App.jsx` export            |

<br/>

### **Summary**

CongratulationsYou have successfully:

* Installed Node.js
* Created a React app with Vite
* Opened it in VS Code
* Ran the app
* Written your **first React code**
