# 🚀 Gerenciador de Assinaturas

Um aplicativo móvel desenvolvido com **React Native** e **Expo** para ajudar usuários a gerenciar e acompanhar suas assinaturas mensais, como serviços de streaming, softwares e outras despesas recorrentes.

## 👨‍💻 Autor
**Eduardo Fernandes - 2312130156**

---

## ✨ Funcionalidades

- **Dashboard Inicial**: Exibe um resumo com o gasto mensal total e uma lista das próximas 3 assinaturas a vencer.
- **CRUD Completo**: Crie, leia, atualize e exclua assinaturas de forma simples e intuitiva.
- **Persistência de Dados**: Utiliza o Google Firebase Firestore como banco de dados NoSQL, com atualizações em tempo real.
- **Navegação Eficiente**: Navegação entre telas implementada com React Navigation.
- **Interface Limpa**: Layout funcional e compreensível, focado na usabilidade.

---

## 🔧 Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **Expo**: Plataforma e conjunto de ferramentas para facilitar o desenvolvimento e build com React Native.
- **Firebase Firestore**: Banco de dados NoSQL em nuvem para armazenamento e sincronização de dados em tempo real.
- **React Navigation**: Biblioteca para roteamento e navegação no aplicativo.
- **JavaScript (ES6+)**

---

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js (versão LTS)](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) ou npm (já vem com o Node.js)
- Expo CLI:
```bash
npm install -g expo-cli 
```
Opcional (para testar localmente no emulador):

- Emulador Android (via Android Studio)

- Simulador iOS (via Xcode — apenas no macOS)

▶️ Como Rodar o Projeto
1. Clone este repositório

git clone https://github.com/EduardoFernandesiesb/Gerenciador-PDM.git
```bash
cd gerenciador-assinaturas
 ```

2. Instale as dependências
 ```bash
npm install 
ou
yarn install
```
3. Configure seu ambiente Firebase
Este projeto precisa se conectar a um projeto Firebase para funcionar corretamente.

Acesse o Console do Firebase e crie um novo projeto.

Vá em Build > Firestore Database e crie um banco no modo de teste.

Volte à tela inicial do Firebase, clique em Adicionar app e selecione a opção Web (ícone </>).

Copie o objeto firebaseConfig gerado.

No projeto, abra o arquivo firebaseConfig.js e cole suas credenciais no local indicado.

4. Execute o aplicativo
```bash
npm start
ou
expo start
```

Isso abrirá o Expo Dev Tools no navegador.

📱 Formas de rodar o app:
No seu celular: Baixe o app Expo Go (Android/iOS) e escaneie o QR Code exibido.

No Emulador Android: Com o Android Studio e um emulador rodando, pressione a no terminal.

No Simulador iOS (apenas no macOS): Com o Xcode aberto, pressione i no terminal.
