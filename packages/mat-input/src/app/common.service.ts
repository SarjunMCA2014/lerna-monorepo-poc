import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  getType(type: string): string {
    return type || "input";
  }

  getValue(value: string): string {
    return value || "";
  }

  getPlaceholder(placeholder: string): string {
    return placeholder || "";
  }
}
