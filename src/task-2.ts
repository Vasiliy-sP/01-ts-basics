interface Product {
  readonly id: number;    //лиш для читання
  title: string;
  description?: string;    //необов`язкове поле
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);