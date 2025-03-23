import React from 'react';
import { ShoppingBag, Users, Notebook as Robot, Utensils } from 'lucide-react';

const features = [
  {
    name: 'Healthy Food E-commerce',
    description: 'Shop for nutritious snacks, meal kits, and supplements.',
    icon: ShoppingBag,
  },
  {
    name: 'Corporate Wellness',
    description: 'Custom health programs for businesses and teams.',
    icon: Users,
  },
  {
    name: 'AI Nutrition Assistant',
    description: 'Get personalized diet recommendations and tracking.',
    icon: Robot,
  },
  {
    name: 'Cooking Classes',
    description: 'Learn to cook healthy meals with expert chefs.',
    icon: Utensils,
  },
];

export function FeaturedServices() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a healthy lifestyle
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}