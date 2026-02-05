# 📦 Exporting and Importing Components in React

When building React apps, it’s often useful to move components out of the root file to make them **modular** and **reusable**. For example, you might want to change the landing screen later to show a list of science books, or display profiles elsewhere. To prepare for that flexibility, you can organize components into separate files.

<br/>

## 🔑 Steps to Move a Component

| Step | Action | Example |
|------|--------|---------|
| 1️⃣ | **Create a new JS file** for your component | `Gallery.js` or `Profile.js` |
| 2️⃣ | **Export** the component from that file | - **Default export:**<br>`export default function Gallery() { ... }`<br>- **Named export:**<br>`export function Gallery() { ... }` |
| 3️⃣ | **Import** the component where you need it | - **Default import:**<br>`import Gallery from './Gallery.js';`<br>- **Named import:**<br>`import { Gallery } from './Gallery.js';` |

<br/>

## 📂 Example Project Structure

```
src/
│
├── main.jsx
├── App.jsx
├── Gallery.jsx
└── Profile.jsx
```

<br/>

## 📝 Example Code

### `Gallery.js`
```javascript
// Default export
export default function Gallery() {
  return <h1>Science Books Gallery</h1>;
}
```

### `Profile.js`
```javascript
// Named export
export function Profile() {
  return <h2>User Profile</h2>;
}
```

### `App.js`
```javascript
import Gallery from './Gallery.js';      // Default import
import { Profile } from './Profile.js';  // Named import

export default function App() {
  return (
    <div>
      <Gallery />
      <Profile />
    </div>
  );
}
```

<br/>

### ✅ Best Practices
- Use **default exports** for single primary components per file (e.g., `Gallery`).
- Use **named exports** when a file contains multiple components/utilities.
- Keep file names **PascalCase** to match component names.
- Organize related components into folders for scalability.

