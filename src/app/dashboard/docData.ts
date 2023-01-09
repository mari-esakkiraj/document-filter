export enum Category {
  Technical = 'Technical',
  Human_Resources = 'Human resources',
  Financial = 'Financial',
  Marketing = 'Marketing'
}

export const documentDetails = [
  { documentName: 'Terminal instructables', category: Category.Technical }, 
  { documentName: 'Installation guides', category: Category.Technical }, 
  { documentName: 'Career opportunities', category: Category.Human_Resources }, 
  { documentName: 'Customer onboarding', category: Category.Financial },
  { documentName: 'Outlet branding', category: Category.Marketing },
  { documentName: 'Accounting procedures', category: Category.Financial },
  { documentName: 'Training', category: Category.Human_Resources },
  { documentName: 'Printing guidance', category: Category.Marketing },
  { documentName: 'Technical support', category: Category.Technical }
];