# ⚛️ Electron Drizzle Starter

A minimal Electron app with Drizzle ORM and SQLite integration.

- Automatically runs database migrations on startup.
- Stores the database file at `$HOME/.electron-drizzle/dev.db`.

## ⚡ Quick start

### Requirements

- Node.js >= 22

### Clone the repository

```bash
git clone https://github.com/bludnic/electron-drizzle.git
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

| Command                  | Action                  |
| :----------------------- | :---------------------- |
| `npm run build`          | Bundle source files     |
| `npm run build:electron` | Build the Electron app  |
| `npm run db:generate`    | Generate SQL migrations |
| `npm run db:migrate`     | Apply DB migrations     |
| `npm run db:seed`        | Seed the database       |

## 🪪 License

This project is licensed under the MIT License.
