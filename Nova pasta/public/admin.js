// admin.js
import { app } from "./firebase-config";
// Certifique-se de inicializar o Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Referência ao nó 'products' no Realtime Database
const db = firebase.database();
const productsRef = db.ref('products');

function addProduct() {
  // Obter dados do formulário
  const productName = document.getElementById('productName').value;
  const productImage = document.getElementById('productImage').value;
  const productDescription = document.getElementById('productDescription').value;
  const productPrice = document.getElementById('productPrice').value;

  // Criar objeto de produto
  const product = {
    name: productName,
    image: productImage,
    description: productDescription,
    price: productPrice,
  };

  // Adicionar novo produto ao Realtime Database
  productsRef.push(product);

  // Limpar o formulário
  document.getElementById('productForm').reset();

  alert('Produto adicionado com sucesso!');
}




