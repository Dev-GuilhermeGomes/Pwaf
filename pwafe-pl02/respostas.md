# Respostas dos exercícios

## Exercício 5 - Caça aos erros

| # | Onde aparece | Mensagem ou aviso | Correção |
|---|---|---|---|
| 1 | Build | `Prato` é usado como valor, embora seja apenas um tipo. | Usar `import type { Prato } from '../types'`. |
| 2 | Build | A tag `preco` não corresponde ao componente React `Preco`. | Importar `Preco` e usar `<Preco valor={prato.preco} />`. |
| 3 | Build | `Etiqueta` não está definida no ficheiro. | Importar `Etiqueta` do componente `./Etiqueta`. |
| 4 | Consola | Os elementos gerados por `map` não têm uma `key` estável. | Usar `key={a}` no elemento `span`. |

## Extra - `key`

Usar o índice como `key` pode causar problemas quando a lista é reordenada, inserida ou removida, porque o React pode reutilizar o componente errado.