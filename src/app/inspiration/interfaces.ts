export interface PropertyDetails {
  address: string;
  display_address?: any;
  cover_image_url?: any;
  google_street_view_url?: any;
  num_bathrooms: number;
  num_bedrooms: number;
  estimated_value_revision_date?: any;
  display_estimated_lower_value_short: string;
  display_estimated_upper_value_short: string;
  display_estimated_value_short: string;
  estimated_rental_revision_date?: any;
  display_estimated_rental_lower_value_short: string;
  display_estimated_rental_upper_value_short: string;
  estimated_rental_yield: string;
  display_capital_value_short: string;
  display_improvement_value_short: string;
  display_land_value_short: string;
  current_revision_date?: any;
  first_gas_enabled: boolean;
  flags?: any;
}

export interface Card {
  id: string;
  item_id: string;
  property_id: string;
  listing_id: string;
  branch_id?: any;
  branch?: any;
  branches?: any;
  state: number;
  sales_count: number;
  property_details: PropertyDetails;
  point?: any;
  display_price?: any;
  price?: any;
  date?: any;
  featured_at?: any;
  agent?: any;
  agents?: any;
  url: string;
  distance_to_point?: any;
  display_price_short: string;
  solar?: any;
}

export interface Address {
  street: string;
  suburb: string;
  city: string;
}

export interface Bathroom extends Base {}

export interface Bedroom extends Base {}

export interface Kitchen extends Base {}

export interface Living extends Base {}

export interface Base {
  images: string[];
  card: Card;
  address: Address;
}

export interface RootObject {
  bathroom: Bathroom[];
  bedroom: Bedroom[];
  kitchen: Kitchen[];
  living: Living[];
}
export interface GridItem {
  img: string;
}
