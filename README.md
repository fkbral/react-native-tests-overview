# Testes no RN
## Dependências (package.json)
- react-test-runner: esta versão deve ser compatível com a versão do React utilizada pela versão instalada do React Native (por exemplo "react-native": "0.68.2" usa  "react-test-renderer": "16.9.0")

## Teste unitário
Testa uma funcionalidade isolada no código, por exemplo, nossos componentes e por isso, utiliza mocks para retirar a influência de fatores externos do teste.

## Teste E2E
Testa um fluxo inteiro, de maneira mais próxima da realidade possível, fazendo as chamadas reais a APIs Rest/GraphQL quando necessário.