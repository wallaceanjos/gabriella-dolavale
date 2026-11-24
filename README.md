# Site da Dra. Gabriella Dolavale

Site estático (Next.js, publicado no GitHub Pages) da pediatra Dra. Gabriella Dolavale, reconstruído a
partir do site que estava parado no Wix.

- **Design system:** [DESIGN.md](DESIGN.md)
- **Regras do projeto e comandos:** [CLAUDE.md](CLAUDE.md)

```bash
npm install
npm run dev       # http://localhost:3000
npm run preview   # build + servidor Cloudflare local em http://127.0.0.1:8787
```

## Publicação

O GitHub Actions publica no GitHub Pages a cada push na `main`
([.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)).

- **Configuração inicial, uma vez só:** no repositório, abra Settings > Pages > Source e escolha "GitHub Actions".
- **Enquanto não há domínio:** a prévia fica em `https://<usuário>.github.io/<repositório>/`, fora do Google.
- **Domínio próprio:**
  1. Aponte o DNS do domínio para o GitHub Pages.
  2. Em Settings > Pages > Custom domain, informe o domínio.
  3. Crie a variável de repositório `CUSTOM_DOMAIN` com o mesmo valor (ex.: `www.dragabrielladolavale.com`).

  O próximo deploy já sai no domínio e liberado para o Google.
