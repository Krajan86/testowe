'use client';

import { useState } from 'react';
import { Wand2, Sparkles } from 'lucide-react';

const tradycyjneSkladniki = [
  // Ryby i owoce morza
  'karp w galarecie', 'śledź w oleju', 'łosoś wędzony', 'śledź po kaszubsku', 'jesiotr w migdałach',
  'sum w śmietanie', 'pstrąg w maśle', 'dorsz po grecku', 'makrela wędzona', 'ryba po żydowsku',
  
  // Zupy
  'barszcz czerwony', 'zupa grzybowa', 'zupa rybna', 'zupa migdałowa', 'zupa owocowa',
  'żurek wigilijny', 'krem z borowików', 'zupa szczawiowa', 'zupa z suszonych owoców', 'krem z kasztanów',
];

const dziwneSkładniki = [
  // Słodycze i przekąski
  'płatki kukurydziane', 'żelki kwaśne', 'prażynki bekowe', 'chipsy wasabi', 'popcorn karmelowy',
  'draże mentolowe', 'gumy balonowe', 'lizaki tęczowe', 'chrupki serowe', 'wafelki czekoladowe',
];

const abstrakcyjneMetody = [
  // Metody magiczne
  'zamrożone w ciekłym azocie elfów',
  'ubite mikserem zasilanym gwiazdką z choinki',
  'destylowane w świetle księżyca podczas pasterki',
  'wędzone dymem z elfich fajek',
  'fermentowane w skarpecie Świętego Mikołaja',
];

const dekoracje = [
  // Dekoracje magiczne
  'posypka z pyłu gwiezdnego',
  'skrzące się płatki śniegu z cukru',
  'konfetti z jadalnego brokatu',
  'miniaturowe bombki z karmelu',
  'lodowe sople z białej czekolady',
];

const zabawnePodumowania = [
  "A teraz do dzieła, Szefie! Życzymy smacznego... chyba 😅",
  "Powodzenia w kuchni! Może lepiej zamów pizzę? 🍕",
  "Jak się uda, koniecznie pochwal się na Slacku! 🌟",
  "Pamiętaj o BHP podczas używania magicznych składników! ✨",
  "Smacznego! (Nie ponosimy odpowiedzialności za skutki uboczne 😅)",
];

export function RecipeGenerator() {
  const [recipe, setRecipe] = useState(null);

  const generateRecipe = () => {
    const tradycyjny = tradycyjneSkladniki[Math.floor(Math.random() * tradycyjneSkladniki.length)];
    const dziwne1 = dziwneSkładniki[Math.floor(Math.random() * dziwneSkładniki.length)];
    const dziwne2 = dziwneSkładniki[Math.floor(Math.random() * dziwneSkładniki.length)];
    const metoda1 = abstrakcyjneMetody[Math.floor(Math.random() * abstrakcyjneMetody.length)];
    const metoda2 = abstrakcyjneMetody[Math.floor(Math.random() * abstrakcyjneMetody.length)];
    const dekoracja = dekoracje[Math.floor(Math.random() * dekoracje.length)];
    const podsumowanie = zabawnePodumowania[Math.floor(Math.random() * zabawnePodumowania.length)];

    const nazwy = [
      'Świąteczna Eksplozja', 'Wigilijny Zawrót Głowy', 'Bożonarodzeniowa Fantazja',
      'Choinkowe Szaleństwo', 'Mikołajkowa Niespodzianka', 'Gwiazdkowa Abstrakcja'
    ];
    const nazwa = nazwy[Math.floor(Math.random() * nazwy.length)];

    setRecipe({
      nazwa,
      skladniki: [tradycyjny, dziwne1, dziwne2],
      przygotowanie: [metoda1, metoda2],
      dekoracja,
      podsumowanie
    });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <img 
          src="/christmas-header.jpg"
          alt="Świąteczna grafika Elevato" 
          className="mx-auto mb-4 rounded-lg shadow-lg w-full max-w-2xl object-cover"
        />
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Elevato Christmas Recipe Generator
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Drodzy Elevatowicze! Przygotujcie się na kulinarne szaleństwo! 
          Ten generator stworzy dla Was najbardziej zakręcone przepisy świąteczne ever.
          Have fun! 🎄✨
        </p>
      </div>

      <button 
        onClick={generateRecipe}
        className="w-full mb-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
      >
        <Wand2 className="mr-2 h-4 w-4" />
        Wygeneruj Zwariowany Przepis Wigilijny
      </button>

      {recipe && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-700 flex items-center justify-center">
            {recipe.nazwa}
            <Sparkles className="inline-block ml-2 h-6 w-6 text-yellow-500" />
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">Składniki:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {recipe.skladniki.map((skladnik, index) => (
                  <li key={index} className="text-gray-700">{skladnik}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">Sposób przygotowania:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                {recipe.przygotowanie.map((krok, index) => (
                  <li key={index} className="text-gray-700">{krok}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">Dekoracja:</h3>
              <p className="text-gray-700">{recipe.dekoracja}</p>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-lg font-medium text-center text-green-800">
                {recipe.podsumowanie}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}