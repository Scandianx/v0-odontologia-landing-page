# Landing page de Odontologia (Next.js)

Landing page para consultório odontológico, construída com Next.js (App Router), React e Tailwind CSS.

## Tecnologias

- Next.js + React + TypeScript
- Tailwind CSS
- Componentes `shadcn/ui` (Radix UI por baixo)

## Requisitos

- Node.js 18+ (recomendado: Node.js LTS)
- npm (ou outro gerenciador: pnpm/yarn)

## Como iniciar o projeto

1) Instale as dependências:

```bash
npm install
```

2) Rode em desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Scripts

- `npm run dev`: roda o servidor de desenvolvimento
- `npm run build`: gera o build de produção
- `npm run start`: inicia o servidor em modo produção (após build)

## Estrutura de pastas

- `app/`: rotas e páginas (Next.js App Router)
- `components/`: componentes reutilizáveis (inclui `components/ui`)
- `public/`: assets estáticos
- `styles/`: estilos auxiliares (quando aplicável)

## Onde editar

- Página inicial: `app/page.tsx`
- Layout/SEO (title, description, Open Graph): `app/layout.tsx`
- Páginas de serviços: `app/servicos/*/page.tsx`

## Deploy

Você pode publicar em qualquer plataforma que rode Next.js (por exemplo: Vercel, Render, Railway, VPS).
O fluxo típico é: `npm install` → `npm run build` → `npm run start`.

## Observações

- O projeto está configurado para não falhar o build por erros de TypeScript (`next.config.mjs`).
- Imagens estão com `unoptimized: true` no Next.js (útil para deploys simples/estáticos).
