class ProductManager {
  products;
  static ultimoId = 0;
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.find((p) => p.code === code)) {
      console.log("Product already exists");
    } else {
      ProductManager.ultimoId++;
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: ProductManager.ultimoId,
      };
      return this.products.push(product);
    }
  }

  getProducts() {
    return console.log(this.products);
  }

  getProductById(id) {
    if (this.products.find((p) => p.id === id)) {
      const indexProduct = this.products.findIndex((dato) => dato.id == id);
      return console.log(
        `Producto encontrado: ${this.products[indexProduct].title}`
      );
    } else {
      console.log("Product not found");
    }
  }
}

const product = new ProductManager();

// Muestra arreglo vacío
product.getProducts();

// Cargo dos productos
product.addProduct(
  "Arroz",
  "Arroz parboil",
  150,

  "https://w7.pngwing.com/pngs/234/577/png-transparent-white-rice-jasmine-rice-basmati-asian-cuisine-rice-spike-food-harvest-cooking-thumbnail.png",
  1,
  20
);
product.addProduct(
  "Papa",
  "Papa lavada",
  250,

  "https://w7.pngwing.com/pngs/234/577/png-transparent-white-rice-jasmine-rice-basmati-asian-cuisine-rice-spike-food-harvest-cooking-thumbnail.png",
  2,
  30
);

// Intento cargar un producto que ya existe su code
product.addProduct(
  "Papa",
  "Papa lavada",
  250,

  "https://w7.pngwing.com/pngs/234/577/png-transparent-white-rice-jasmine-rice-basmati-asian-cuisine-rice-spike-food-harvest-cooking-thumbnail.png",
  2,
  30
);

// Muestro todos los productos
product.getProducts();

// Muestro un producto por su id
product.getProductById(2);

// Prueba de un producto no encontrado por su id
product.getProductById(5);
