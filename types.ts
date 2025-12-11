export enum FlowStep {
  UPLOAD = 'UPLOAD',
  PROCESSING = 'PROCESSING',
  REVIEW = 'REVIEW',
  CHECKOUT = 'CHECKOUT',
  SUCCESS = 'SUCCESS'
}

export interface Material {
  id: string;
  name: string;
  category: string;
  description: string;
  supplier: string;
  matchScore: number; // 0-100
  pricePerUnit: number;
  unit: string;
  leadTimeWeeks: number;
  imageUrl: string;
  provenanceHash: string;
  isAiRecommended: boolean;
}

export interface CartItem extends Material {
  quantity: number;
}