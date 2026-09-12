export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  type: string;
  beds: number;
  baths: number;
  area: string;
  status: string;
  image: string;
  accent: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: 'cedar-house',
    title: 'Cedar House',
    location: 'Hawthorne Hills',
    price: '$1,280,000',
    priceValue: 1280000,
    type: 'House',
    beds: 4,
    baths: 3,
    area: '2,480 sq ft',
    status: 'For sale',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    accent: '#c7bba5',
    description:
      'A light-filled family house with a quiet garden, original timber details, and room to grow.',
  },
  {
    id: 'the-marlowe',
    title: 'The Marlowe',
    location: 'Old Town',
    price: '$845,000',
    priceValue: 845000,
    type: 'Apartment',
    beds: 2,
    baths: 2,
    area: '1,140 sq ft',
    status: 'For sale',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    accent: '#b7c8bf',
    description:
      'A composed apartment in the heart of Old Town, with tall windows and a considered renovation.',
  },
  {
    id: 'orchard-studio',
    title: 'Orchard Studio',
    location: 'West End',
    price: '$3,200 / month',
    priceValue: 3200,
    type: 'Rental',
    beds: 1,
    baths: 1,
    area: '720 sq ft',
    status: 'For rent',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    accent: '#d1b3a5',
    description:
      'A generous studio with a separate sleeping nook and views over the neighborhood rooftops.',
  },
  {
    id: 'willow-cottage',
    title: 'Willow Cottage',
    location: 'Northbank',
    price: '$965,000',
    priceValue: 965000,
    type: 'House',
    beds: 3,
    baths: 2,
    area: '1,860 sq ft',
    status: 'For sale',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    accent: '#c0c9b2',
    description:
      'An inviting cottage with a deep garden and a simple, generous relationship to the outdoors.',
  },
];

export function getProperty(id: string) {
  return properties.find((property) => property.id === id);
}
