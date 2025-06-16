#🚀 Gerenciador de Assinaturas

Um aplicativo móvel desenvolvido com React Native e Expo para ajudar usuários a gerenciar e acompanhar suas assinaturas mensais, como serviços de streaming, softwares e outras despesas recorrentes.

👨‍💻 Autor
[Eduardo Fernades - 2312130156]

✨ Funcionalidades
Dashboard Inicial: Exibe um resumo com o gasto mensal total e uma lista das próximas 3 assinaturas a vencer.
CRUD Completo: Crie, leia, atualize e exclua assinaturas de forma simples e intuitiva.
Persistência de Dados: Utiliza o Google Firebase Firestore como banco de dados NoSQL, com atualizações em tempo real.
Navegação Eficiente: Navegação entre telas implementada com React Navigation.
Interface Limpa: Layout funcional e compreensível, focado na usabilidade.
🔧 Tecnologias Utilizadas
React Native: Framework para desenvolvimento de aplicativos móveis multiplataforma.
Expo: Plataforma e conjunto de ferramentas para facilitar o desenvolvimento e build com React Native.
Firebase Firestore: Banco de dados NoSQL em nuvem para armazenamento e sincronização de dados em tempo real.
React Navigation: Biblioteca para roteamento e navegação no aplicativo.
JavaScript (ES6+)
⚙️ Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:

Node.js (versão LTS recomendada)
Yarn ou npm (já vem com o Node.js)
Expo CLI: npm install -g expo-cli
Git para clonar o repositório.
(Opcional) Emulador Android (via Android Studio) ou iOS (via Xcode).
▶️ Como Rodar o Projeto
Siga os passos abaixo para executar o projeto em seu ambiente local.

1. Clone este repositório
Bash

git clone https://github.com/EduardoFernandesiesb/Gerenciador-PDM.git
cd gerenciador-assinaturas
2. Instale as dependências
Execute o comando abaixo para instalar todas as bibliotecas necessárias para o projeto.

Bash

npm install
ou, se você usa Yarn:

Bash

yarn install
3. Configure seu ambiente Firebase
Este projeto precisa se conectar a um projeto Firebase para funcionar.

Vá até o Console do Firebase e crie um novo projeto.
No seu novo projeto, vá para a seção Build > Firestore Database e crie um novo banco de dados no modo de teste.
Volte para a tela de "Visão geral do projeto", clique em Adicionar app e selecione o ícone da Web (</>).
Dê um nome ao seu app web e o Firebase irá gerar um objeto de configuração firebaseConfig. Copie este objeto.
Abra o arquivo firebaseConfig.js e cole as suas credenciais do Firebase que você copiou, tem um espaço indicado no arquivo para ele.



4. Execute o aplicativo
Com tudo configurado, inicie o servidor de desenvolvimento do Expo:

Bash

npm start
ou

Bash

expo start
Isso abrirá o Expo Dev Tools no seu navegador. Agora você pode rodar o app de algumas formas:

No seu celular: Baixe o app Expo Go (Android/iOS) e escaneie o QR Code exibido no terminal ou no navegador.
No Emulador Android: Com o Android Studio e um emulador já configurados e abertos, pressione a no terminal.
No Simulador iOS (apenas macOS): Com o Xcode e um simulador abertos, pressione i no terminal.
