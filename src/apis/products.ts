import path from "path";
import { promises as fs } from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
}

export const getProducts = async (): Promise<Product[]> => {
  for (let i = 0; i < 10000000; i++) { };
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(filePath, 'utf-8');

  return JSON.parse(data);
}

export const getProduct = async (id: string): Promise<Product | undefined> => {
  const products = await getProducts();
  return products.find((item) => item.id === id);
  // return 'shirt';
}
