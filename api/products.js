// Vercel serverless function for products API
export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Sneakers",
      price: 15000,
      description: "Cool sneakers",
      image: "",
      stock: 10,
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 5000,
      description: "Nice t-shirt",
      image: "",
      stock: 20,
    },
    {
      id: 3,
      name: "Cap",
      price: 3000,
      description: "Stylish cap",
      image: "",
      stock: 15,
    },
  ];
  res.status(200).json(products);
}
