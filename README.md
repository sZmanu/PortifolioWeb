# Portfólio

## Contato

O formulário envia mensagens pelo Formspree sem sair do site. Crie um formulário
na sua conta do Formspree, configure e confirme o e-mail destinatário conforme
as instruções do serviço e copie o endpoint `https://formspree.io/f/SEU_ID`.
Preencha `VITE_FORMSPREE_ENDPOINT` em `.env` ou `.env.local`. Sem um endpoint
válido, o envio permanece indisponível. O endpoint é público e não é uma chave secreta.

`VITE_CONTACT_EMAIL` controla apenas o endereço exibido na seção de contato;
o destinatário das mensagens é configurado no painel do Formspree.
Reinicie o servidor de desenvolvimento ou gere um novo build após alterar
as variáveis. Na hospedagem, configure também eventuais restrições de domínio
do formulário no Formspree.

Os campos são apagados somente após o Formspree aceitar a mensagem. Em caso
de falha, o texto é preservado para nova tentativa. O botão fica bloqueado
durante a requisição. A confirmação indica aceitação pelo serviço, não leitura
ou entrega garantida na caixa de entrada.

## Links e materiais pendentes

Os textos, imagens e vídeos provisórios ficam preservados. Nos cards, projetos
sem vídeo usam a primeira imagem disponível; sem ambos, exibem uma prévia
indisponível. Preencha os links reais em `src/utils/ProjectsData.ts`,
`src/components/ButtonSocial.tsx` e `src/components/TrajectorySection.tsx`.
Destinos externos vazios, inválidos ou iguais a `#` não geram navegação.

## Desenvolvimento

Execute `npm install` e `npm run dev`. Valide as alterações com `npm run build`
e `npm run lint`.

## Acessibilidade

Use Tab e Shift+Tab para percorrer os controles; o primeiro link permite pular
para o conteúdo. O seletor de tema funciona com Espaço, usa a preferência do
sistema no primeiro acesso e salva a escolha no navegador.

O modal de projetos mantém o foco dentro do diálogo, fecha com Escape e devolve
o foco ao botão de origem. No menu móvel, Escape retorna ao botão de navegação;
selecionar uma seção move o foco para ela. Filtros anunciam seu estado pressionado
e os slides fora da área visível ficam inertes. As prévias dos cards reproduzem
vídeos sem controles visíveis, sem som e apenas enquanto estão na tela; pausam
com movimento reduzido ou quando a aba fica oculta. O modal mantém os controles
nativos de vídeo. Projetos sem vídeo usam a primeira imagem como capa; essa
imagem também aparece se o vídeo falhar ou a reprodução automática for bloqueada.

Ao alterar esses componentes, confira esses fluxos no desktop e no celular,
além de executar build e lint. Esses testes não substituem uma avaliação completa
com leitor de tela e medição de contraste.

## Animações e fontes

`src/components/Reveal.tsx` aplica entradas individuais com as variantes `left`,
`right`, `rise`, `zoom` e `tilt`; `delay` controla a sequência em milissegundos.
Cada item anima uma vez ao entrar na tela, inclusive após trocar abas ou filtros.
Os efeitos respeitam movimento reduzido e nunca escondem controles focados.
As transições ficam no contêiner e os efeitos de hover nos elementos internos.
O subtítulo repete a digitação a cada 8 segundos. A foto principal flutua
continuamente, os anéis da foto em Sobre giram e os botões mantêm seus loops
decorativos originais, respeitando a preferência por movimento reduzido.

A Poppins solicita apenas os pesos usados: 400, 500, 600, 700 e 900, sem itálicos.
Os fundos luminosos e os botões mantêm as sombras e os filtros de desfoque do visual original.

## Referência do template

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
