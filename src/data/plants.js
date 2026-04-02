const buildPlantImage = (label, backgroundA, backgroundB, leafColor, potColor) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 320">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${backgroundA}" />
          <stop offset="100%" stop-color="${backgroundB}" />
        </linearGradient>
      </defs>
      <rect width="420" height="320" rx="28" fill="url(#bg)" />
      <circle cx="350" cy="68" r="52" fill="#ffffff" opacity="0.18" />
      <ellipse cx="210" cy="268" rx="100" ry="18" fill="#113425" opacity="0.16" />
      <rect x="150" y="170" width="120" height="76" rx="20" fill="${potColor}" />
      <rect x="168" y="184" width="84" height="14" rx="7" fill="#ffffff" opacity="0.15" />
      <rect x="206" y="104" width="8" height="86" rx="4" fill="#355b44" />
      <path d="M210 162 C170 142 156 112 160 86 C196 90 214 124 210 162 Z" fill="${leafColor}" />
      <path d="M210 152 C250 136 276 106 272 76 C238 82 212 114 210 152 Z" fill="${leafColor}" opacity="0.95" />
      <path d="M206 132 C176 126 144 106 138 78 C174 80 204 100 206 132 Z" fill="${leafColor}" opacity="0.7" />
      <text x="26" y="42" fill="#ffffff" font-size="22" font-family="Segoe UI, Arial, sans-serif" font-weight="700">${label}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const plants = [
  {
    id: 'lavender-mint',
    name: 'Lavender Mint',
    description: 'A calming fragrant blend that makes bright windows feel spa-like.',
    price: 18,
    category: 'Aromatic Plants',
    image: buildPlantImage('Lavender Mint', '#8d7cb0', '#f0d8bd', '#b9f0a0', '#8f5b40'),
  },
  {
    id: 'lemon-balm',
    name: 'Lemon Balm',
    description: 'Fresh citrus notes and soft leaves for cheerful kitchen corners.',
    price: 16,
    category: 'Aromatic Plants',
    image: buildPlantImage('Lemon Balm', '#9fcb7f', '#f6e9bc', '#c5f193', '#8d5f3d'),
  },
  {
    id: 'rosemary-glow',
    name: 'Rosemary Glow',
    description: 'A crisp, woodsy herb that adds scent and texture to small spaces.',
    price: 19,
    category: 'Aromatic Plants',
    image: buildPlantImage('Rosemary Glow', '#5f8c77', '#dceccb', '#c7f0ab', '#886046'),
  },
  {
    id: 'jasmine-bloom',
    name: 'Jasmine Bloom',
    description: 'Softly scented foliage with a romantic greenhouse feel.',
    price: 21,
    category: 'Aromatic Plants',
    image: buildPlantImage('Jasmine Bloom', '#6aa3a1', '#f4d9d5', '#b7ed9d', '#8b6145'),
  },
  {
    id: 'sweet-basil',
    name: 'Sweet Basil',
    description: 'A lively everyday herb that thrives in sunny, well-loved kitchens.',
    price: 15,
    category: 'Aromatic Plants',
    image: buildPlantImage('Sweet Basil', '#76a36d', '#ece3bc', '#d5f7a8', '#84563e'),
  },
  {
    id: 'eucalyptus-mist',
    name: 'Eucalyptus Mist',
    description: 'Silvery leaves and a cool aroma for a refreshing indoor mood.',
    price: 24,
    category: 'Aromatic Plants',
    image: buildPlantImage('Eucalyptus Mist', '#6b8fa6', '#e0d9ef', '#b9f2cf', '#7a5640'),
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    description: 'A classic soothing succulent with sculptural leaves and easy care.',
    price: 17,
    category: 'Medicinal Plants',
    image: buildPlantImage('Aloe Vera', '#88c46a', '#dff0bf', '#c0f28b', '#8e6448'),
  },
  {
    id: 'holy-basil',
    name: 'Holy Basil',
    description: 'A heritage herb known for its warm aroma and tender foliage.',
    price: 18,
    category: 'Medicinal Plants',
    image: buildPlantImage('Holy Basil', '#7bb06d', '#f0dec2', '#d5f2a5', '#805a40'),
  },
  {
    id: 'chamomile-cloud',
    name: 'Chamomile Cloud',
    description: 'Soft blossoms and delicate texture that feel light and restorative.',
    price: 20,
    category: 'Medicinal Plants',
    image: buildPlantImage('Chamomile Cloud', '#a9c46c', '#f6ebca', '#d3f0a0', '#8d6142'),
  },
  {
    id: 'peppermint-calm',
    name: 'Peppermint Calm',
    description: 'Bright, cooling leaves that bring freshness to a study or office.',
    price: 16,
    category: 'Medicinal Plants',
    image: buildPlantImage('Peppermint Calm', '#60a08c', '#d9f1de', '#baf1a2', '#7c5740'),
  },
  {
    id: 'sage-serenity',
    name: 'Sage Serenity',
    description: 'Velvety leaves with a grounded look that suits warm interiors.',
    price: 18,
    category: 'Medicinal Plants',
    image: buildPlantImage('Sage Serenity', '#809b70', '#e8dfcd', '#c2e89b', '#846049'),
  },
  {
    id: 'thyme-trail',
    name: 'Thyme Trail',
    description: 'Compact greenery with a gentle herbal profile and tidy habit.',
    price: 14,
    category: 'Medicinal Plants',
    image: buildPlantImage('Thyme Trail', '#7d9d5d', '#ebe2be', '#cef1a4', '#8d6245'),
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    description: 'An upright, dependable favorite that looks striking in modern rooms.',
    price: 26,
    category: 'Air Purifying Plants',
    image: buildPlantImage('Snake Plant', '#6c8e58', '#d8e6b0', '#dcf29a', '#82543c'),
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    description: 'Glossy foliage and elegant blooms that soften busy living areas.',
    price: 28,
    category: 'Air Purifying Plants',
    image: buildPlantImage('Peace Lily', '#5f8a74', '#d7ead3', '#d4f2aa', '#7f5a42'),
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    description: 'Polished leaves and sturdy growth for low-maintenance plant lovers.',
    price: 25,
    category: 'Air Purifying Plants',
    image: buildPlantImage('ZZ Plant', '#55766b', '#dde8cb', '#bff0a0', '#855a42'),
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    description: 'Arched leaves and playful offsets that brighten shelves and desks.',
    price: 19,
    category: 'Air Purifying Plants',
    image: buildPlantImage('Spider Plant', '#7aa96c', '#f0edc8', '#ddf49d', '#8a6246'),
  },
  {
    id: 'boston-fern',
    name: 'Boston Fern',
    description: 'Feathery greenery for humid spots that need softness and volume.',
    price: 24,
    category: 'Air Purifying Plants',
    image: buildPlantImage('Boston Fern', '#5f8f63', '#d8e9c7', '#c6ef9b', '#7f5940'),
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    description: 'Bold leaves and a clean silhouette for a polished indoor look.',
    price: 31,
    category: 'Air Purifying Plants',
    image: buildPlantImage('Rubber Plant', '#6d758d', '#ead1c5', '#b0e990', '#845a41'),
  },
]

export const plantSections = [
  {
    title: 'Aromatic Plants',
    description: 'Fragrant herbs and soothing greens that bring freshness into everyday spaces.',
    plants: plants.filter((plant) => plant.category === 'Aromatic Plants'),
  },
  {
    title: 'Medicinal Plants',
    description: 'Well-loved healing herbs and gentle foliage chosen for comfort and care.',
    plants: plants.filter((plant) => plant.category === 'Medicinal Plants'),
  },
  {
    title: 'Air Purifying Plants',
    description: 'Leafy indoor staples that create a crisp, restorative atmosphere at home.',
    plants: plants.filter((plant) => plant.category === 'Air Purifying Plants'),
  },
]
