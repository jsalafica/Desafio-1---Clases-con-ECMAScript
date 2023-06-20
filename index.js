class ProductManager {
  products;
  static ultimoId = 0;
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (
      title == undefined ||
      description == undefined ||
      price == undefined ||
      thumbnail == undefined ||
      code == undefined ||
      stock == undefined
    ) {
      return "Todos los campos son obligatorios.";
    }

    let codeExists = this.products.some((dato) => dato.code == code);

    if (codeExists) {
      return "El producto ya existe.";
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
    return this.products;
  }

  getProductById(id) {
    let product = this.products.find((dato) => dato.id === id);
    if (product != undefined) {
      return product;
    } else {
      return `Producto no encontrado con id ${id}`;
    }
  }
}

const product = new ProductManager();

// Muestra arreglo vacío
console.log("Muestro arreglo vacío", product.getProducts());

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
console.log(
  "Intento cargar un producto repetido...",
  product.addProduct(
    "Papa",
    "Papa lavada",
    250,

    "https://w7.pngwing.com/pngs/234/577/png-transparent-white-rice-jasmine-rice-basmati-asian-cuisine-rice-spike-food-harvest-cooking-thumbnail.png",
    2,
    30
  )
);

// Muestro todos los productos
console.log("Muestro todos los productos", product.getProducts());

// Muestro un producto por su id
console.log("Muestro producto con id 2", product.getProductById(2));

// Prueba de un producto no encontrado por su id
console.log(product.getProductById(5));
