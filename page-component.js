'use client';
 
import { RecipeGenerator } from '../components/recipe-generator';
 
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8">
      <RecipeGenerator />
    </main>
  );
}