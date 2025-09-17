export interface FormField {
  id: number;
  label: string;
  name: string;
  type: string;
  is_required: boolean;
  options: string[] | null;
  validation_rules: string | null;
  order: number;
  class_name: string | null;
  placeholder: string | null;
  depends_on_field_id: number | null;
  depends_on_value: string | null;
}

export interface FormSection {
  id: number;
  title: string;
  order: number;
  fields: FormField[];
}

export interface FormData {
  id: number;
  name: string;
  slug: string;
  description: string;
  sections: FormSection[];
}

// For API responses that wrap collections in a "data" key
export interface ApiCollectionResponse<T> {
    data: T[];
}

// For API responses that wrap a single item in a "data" key
export interface ApiSingleResponse<T> {
    data: T;
}