import React from 'react';
import { passiveRules } from '../data/passiveRules';
import { Book } from 'lucide-react';

export function PassiveRules() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mx-auto"
      >
        <Book size={20} />
        {isOpen ? 'Kural Listesini Gizle' : 'Pasif Cümle Kurallarını Göster'}
      </button>

      {isOpen && (
        <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Pasif Cümle Yapım Kuralları</h2>
          <div className="grid gap-6">
            {passiveRules.map((rule) => (
              <div key={rule.tense} className="border-b pb-4">
                <h3 className="font-semibold text-lg text-blue-600 mb-2">
                  {rule.tense}
                </h3>
                <p className="mb-2">
                  <span className="font-medium">Yapı: </span>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    {rule.structure}
                  </code>
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <p>
                    <span className="font-medium">Aktif: </span>
                    {rule.example.active}
                  </p>
                  <p>
                    <span className="font-medium">Pasif: </span>
                    {rule.example.passive}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}