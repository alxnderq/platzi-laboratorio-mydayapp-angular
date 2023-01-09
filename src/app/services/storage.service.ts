import {Injectable} from '@angular/core';
import {TodoItem} from "../interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageKey: string;

  constructor() {
    this.localStorageKey = 'todoapp-angular'
  }

  getData(): TodoItem[] {
    const items = localStorage.getItem(this.localStorageKey);
    return items ? JSON.parse(items) : [];
  }

  save(data: TodoItem[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(data))
  }


}
