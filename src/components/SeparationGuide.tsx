import React from 'react';
import { Trash2, Recycle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card } from './Card';

const wasteTypes = {
  organic: {
    title: "Resíduos Orgânicos",
    items: [
      "Restos de alimentos",
      "Cascas de frutas e legumes",
      "Borra de café",
      "Folhas e flores",
      "Papel toalha usado"
    ]
  },
  nonOrganic: {
    title: "Resíduos Não Orgânicos",
    items: [
      "Embalagens plásticas",
      "Papéis e papelão",
      "Vidros",
      "Metais",
      "Isopor"
    ]
  }
};

const separationSteps = [
  {
    title: "Separe em duas categorias principais",
    description: "Divida seus resíduos em orgânicos (restos de alimentos) e recicláveis (plástico, papel, vidro, metal)."
  },
  {
    title: "Limpe os materiais recicláveis",
    description: "Lave levemente embalagens e recipientes para remover resíduos de alimentos."
  },
  {
    title: "Compacte os materiais",
    description: "Amasse papelões e latinhas para ocupar menos espaço."
  },
  {
    title: "Use sacolas adequadas",
    description: "Orgânicos em sacos pretos, recicláveis em sacos azuis ou transparentes."
  }
];

export function SeparationGuide() {
  return (
    <div className="space-y-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Resíduos Orgânicos</h3>
          <Card>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-amber-100 rounded-2xl">
                <Trash2 className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <ul className="space-y-3">
                  {wasteTypes.organic.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Resíduos Recicláveis</h3>
          <Card>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-100 rounded-2xl">
                <Recycle className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <ul className="space-y-3">
                  {wasteTypes.nonOrganic.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Passo a Passo da Separação</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {separationSteps.map((step, index) => (
            <Card key={index}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-amber-50">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-amber-100 rounded-2xl">
            <AlertCircle className="w-8 h-8 text-amber-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Atenção!</h4>
            <p className="text-gray-600">
              Alguns materiais precisam de descarte especial: pilhas, baterias, eletrônicos, lâmpadas e óleo de cozinha.
              Procure pontos de coleta específicos para estes itens.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}