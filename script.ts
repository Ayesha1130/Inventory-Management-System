interface Product {
  productName: string;
  quantity: number;
  price: number;
}

const products: Product[] = [
  { productName: "Apple", quantity: 10, price: 1.00 },
  { productName: "Banana", quantity: 5, price: 0.50 },
  { productName: "Cherry", quantity: 20, price: 2.00 }
];

function displayProducts() {
  const tbody = document.querySelector('tbody')!;
  tbody.innerHTML = '';

  products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${product.productName}</td>
          <td>${product.quantity}</td>
          <td>${product.price.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
  });
}

window.onload = () => {
  displayProducts();

  const addButton = document.getElementById('addProduct')!;
  addButton.addEventListener('click', () => {
      const productName = (document.getElementById('productName') as HTMLInputElement).value;
      const quantity = parseInt((document.getElementById('quantity') as HTMLInputElement).value);
      const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);

      if (productName && quantity > 0 && price >= 0) {
          products.push({ productName, quantity, price });
          displayProducts();
          (document.getElementById('productName') as HTMLInputElement).value = '';
          (document.getElementById('quantity') as HTMLInputElement).value = '';
          (document.getElementById('price') as HTMLInputElement).value = '';
      } else {
          alert('Please enter valid product details.');
      }
  });
};





  
