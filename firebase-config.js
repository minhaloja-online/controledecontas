// Configurações do site — edite só este arquivo, nunca precisa abrir o index.html.
// Depois de editar, salve e suba este arquivo junto com o index.html no mesmo lugar.

// 1) Chaves do seu projeto Firebase.
//    Onde encontrar: console.firebase.google.com > Configurações do projeto > Seus apps > SDK.
const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI.firebaseapp.com",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI.appspot.com",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

// 2) E-mail de quem administra o site (aprova novas contas, vê o painel de Admin
//    completo). Use o mesmo e-mail com que você faz login.
//    IMPORTANTE: esse mesmo e-mail também precisa estar copiado dentro do
//    arquivo firestore.rules (na função isAdmin), senão as regras de segurança
//    não vão reconhecer você como administrador.
const EMAIL_ADMIN = "SEU_EMAIL_ADMIN_AQUI@exemplo.com";
