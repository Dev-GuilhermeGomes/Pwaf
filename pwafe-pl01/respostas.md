# Respostas dos exercícios

## Exercício 3 - Erros de JSX

| # | Erro encontrado | Correcção |
|---|---|---|
| 1 | Em JSX, `class` não é o atributo correcto para classes CSS. | Usar `className="titulo"`. |
| 2 | O texto `nome` estava escrito literalmente e não mostrava a variável. | Usar a expressão JSX `{nome}`. |
| 3 | A tag `<img>` não estava fechada. | Fechar como `<img src="/favicon.svg" alt="Logo" />`. |
| 4 | O `return` tinha vários elementos no mesmo nível. | Envolver os elementos num fragmento ou num elemento pai. |

## Exercício 6 - Erros de tipo

| Linha | Código do erro (TSxxxx) | O que significa | Correcção |
|---|---|---|---|
| 1 | TS2322 | `preco` foi declarado como `number`, mas recebeu texto. | Usar `49.90` sem aspas. |
| 2 | TS2322 | `emStock` foi declarado como `boolean`, mas recebeu o texto `'sim'`. | Usar `true` ou `false`. |
| 3 | TS2345 | `precoComIva` recebe um número, mas foi passado `produto.nome`, que é texto. | Passar `produto.preco`. |

O `npm run dev` podia continuar a mostrar a página porque o servidor de desenvolvimento faz a transformação com feedback rápido, enquanto o `npm run build` executa a verificação TypeScript completa e falha perante erros de tipos.

## Histórico Git

```text
 e268cdd PL01: JSX e TypeScript
 dcd5be4 PL01: cartão responsivo
 44f2ede feat: adicionar páginas de perfil e projetos
 5fabc37 mudança de alguns trabalhos para true ou concluido
 b0d72a9 Ligação do projeto Pwafe-T02 ao GitHub
 5202b11 TailWind e Loja Tsx
 f3b2729 primeiros trabalhos PWAFE
```
