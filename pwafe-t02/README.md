# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Navegação entre páginas

Este projecto inclui duas páginas:

- `/` apresenta o cartão de apresentação e os projectos.
- `/perfil` apresenta o perfil completo do aluno.

### React Router

O pacote `react-router-dom` está instalado nas dependências do projecto:

```bash
npm install react-router-dom
```

O `BrowserRouter` envolve o componente `App` em `src/main.tsx`. Isto permite que a aplicação reconheça e altere o endereço da página sem recarregar todo o site.

### Definição das rotas

As rotas são definidas em `src/App.tsx` com `Routes` e `Route`:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/perfil" element={<PerfilPage perfil={perfil} />} />
</Routes>
```

Neste projecto, o conteúdo da página inicial está directamente no `element` da rota `/`.

### Ir para o perfil completo

O componente `src/components/cartaoperfil.tsx` usa o hook `useNavigate`:

```tsx
const navigate = useNavigate()

<button onClick={() => navigate('/perfil')}>
  Ver perfil completo
</button>
```

Ao clicar no botão, o React Router muda para `/perfil` e mostra `src/pages/PerfilPage.tsx`.

### Regressar à página anterior

Na página de perfil, o botão `Voltar` também usa `useNavigate`, mas com `-1`:

```tsx
const navigate = useNavigate()

<button onClick={() => navigate(-1)}>
  Voltar
</button>
```

O valor `-1` significa voltar uma posição no histórico do navegador. Assim, o utilizador regressa à página de onde veio.

### Dados apresentados

Os dados do aluno são guardados no objecto `perfil`, em `src/App.tsx`, e enviados para os componentes através de props. A `PerfilPage` usa esses dados para mostrar o nome, curso, ano e interesses. A descrição é apresentada como texto complementar.

### Estilos

Os estilos continuam a usar classes utilitárias do Tailwind CSS, por exemplo `bg-slate-100`, `rounded-lg`, `p-6` e `text-slate-700`. Não foi necessário criar CSS adicional para a navegação.

### Validação

Para validar o projecto:

```bash
npm run build
npm run lint
```
