import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  path: string = "http://localhost:3000/categories";

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))), 
      catchError(this.handlerError)
      );
  }

  handlerError(err: HttpErrorResponse){
    let errorMessage = ''
    if(err.error instanceof ErrorEvent){
        errorMessage = 'Bir hata oluştu '+ err.error.message
    }else{
      errorMessage = 'Sistemsel bir hata oluştu'
    }
    return throwError(errorMessage);
  }
}

