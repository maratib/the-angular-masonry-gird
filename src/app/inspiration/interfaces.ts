export interface ApiResponse {
  bathroom: Data[];
  bedroom: Data[];
  kitchen: Data[];
  living: Data[];
}
export interface Data {
  images: string[];
  card: any;
  address: any;

}
