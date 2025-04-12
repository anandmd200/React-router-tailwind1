import React, { useState } from 'react';

const itemsData = [
  { id: 1, name: 'Item One', price: '$25', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Item Two', price: '$40', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Item Three', price: '$60', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Item Four', price: '$80', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Item Five', price: '$15', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Item Six', price: '$100', image: 'https://via.placeholder.com/150' },
];

const Items = () => {
  const [items] = useState(itemsData);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Items</h1>
          <input
            type="text"
            placeholder="Search items..."
            className="px-4 py-2 border rounded-md shadow-sm w-64"
          />
        </div>

        {/* Items Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                View Item
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
