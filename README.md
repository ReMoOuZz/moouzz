# Moouzz

Moouzz is a lightweight scaffolding CLI that helps you spin up opinionated project templates in seconds.
It ships with ready-to-use front-end blueprints so you can focus on features instead of boilerplate.

---

## Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd moouzz
   ```
2. **Install dependencies** (none are required today, but this keeps the workflow familiar)
   ```bash
   npm install
   ```
3. **Link the CLI locally**
   ```bash
   npm link
   ```
   You can now invoke the CLI anywhere with the `moouzz` command.

To remove the link later, run `npm unlink -g moouzz` and/or `npm unlink` inside the repo.

---

## CLI Usage

- List the available templates
  ```bash
  moouzz list
  ```
- Scaffold a new project (example)
  ```bash
  moouzz new vanilla-web my-project --git --no-install
  ```
  The command above generates the `vanilla-web` template in `./my-project`, initializes Git, and skips dependency installation.

Run `moouzz --help` for the full option matrix.

---

## Template Catalogue

| Template     | Description                                            |
|--------------|--------------------------------------------------------|
| Vanilla Web  | [Read the guide](docs/templates/vanilla-web.md) — static web starter with HTML partials, CSS layers, and modular JS. |
| React + Vite | [Read the guide](docs/templates/react-vite.md) — React 19 + Vite project prewired with Bootstrap and sample UI. |

As new templates land, this table will grow with quick descriptions and deep-dive links.

---

## Contributing

1. Fork the repository and create a feature branch.
2. Commit clear, descriptive messages (English is preferred).
3. Open a pull request describing the template changes or CLI enhancements.

Bug reports and feature ideas are welcome through issues or discussions.

---

## License

This project is released under the MIT License.
