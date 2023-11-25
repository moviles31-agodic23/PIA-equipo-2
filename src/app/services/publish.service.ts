import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublishService {

  constructor() { }
  publicaciones: { foto: string | undefined, descripcion: string }[] = [];

}
