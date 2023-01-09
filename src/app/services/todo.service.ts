import {Injectable} from '@angular/core';
import {TodoItem} from "../interfaces/todo.interface";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items: TodoItem[];

  constructor(
    private storageService: StorageService
  ) {
    this.items = []
  }

  getAllItems(): TodoItem[] {
    return this.storageService.getData();
  }

  saveItem(): void {

  }


}
