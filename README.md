# ⚛️ Electron Drizzle Starter

A minimal Electron app example with Drizzle ORM + SQLite integration.

- Automatically runs database migrations on startup.
- Stores the database file at `$HOME/.electron-drizzle/dev.db`.

## ⚡ Quick start

### Requirements

- Node.js >= 22

### Clone the repository

```bash
git clone http://github.com/bludnic/electron-drizzle
```

### Environment variables

Create `.env` file.

```bash
cp .env.example .env
```

### Bootstrap

Install dependencies

```bash
npm install
```

Build the app

```bash
npm run build:electron
```

Run the app

```bash
chmod +x dist-electron/electron-drizzle-1.0.0.AppImage
./dist-electron/electron-drizzle-1.0.0.AppImage
```

## 🔧 Commands

| Command                  | Action                 |
| :----------------------- | :--------------------- |
| `npm run build`          | Bundle source files    |
| `npm run build:electron` | Build the Electron app |

## 🪪 License

This project is licensed under the MIT License.
