// Configurações do site — edite só este arquivo, nunca precisa abrir o index.html.
// Depois de editar, salve e suba este arquivo junto com o index.html no mesmo lugar.

// 1) Chaves do seu projeto Firebase.
//    Onde encontrar: console.firebase.google.com > Configurações do projeto > Seus apps > SDK.
const firebaseConfig = {
  apiKey: "AIzaSyDxOteyUrA6QtFqwHCHqCSjw9rkM5HQff0",
  authDomain: "controle-de-contas-7c11f.firebaseapp.com",
  projectId: "controle-de-contas-7c11f",
  storageBucket: "controle-de-contas-7c11f.firebasestorage.app",
  messagingSenderId: "944236549767",
  appId: "1:944236549767:web:2b84f6672bf050cef88a22"
};

// 2) E-mail de quem administra o site (aprova novas contas, vê o painel de Admin
//    completo). Use o mesmo e-mail com que você faz login.
//    IMPORTANTE: esse mesmo e-mail também precisa estar copiado dentro do
//    arquivo firestore.rules (na função isAdmin), senão as regras de segurança
//    não vão reconhecer você como administrador.
const EMAIL_ADMIN = "brenno.liberty@exemplo.com";
