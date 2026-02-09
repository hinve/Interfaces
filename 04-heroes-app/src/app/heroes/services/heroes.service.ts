import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { HeroInterface } from '../interfaces/hero-interface';
import { enviroments } from '../../enviroments/enviroments';

@Injectable({providedIn: 'root'})
export class HeroesService {
    private baseUrl: string = enviroments.baseUrl;
    constructor(private http: HttpClient) { }
    
    getHeroes(): Observable<HeroInterface[]> {
        return this.http.get<HeroInterface[]>(`${this.baseUrl}/heroes`);
    }

    getHeroById(id: string): Observable<HeroInterface|undefined> {
        return this.http.get<HeroInterface>(`${this.baseUrl}/heroes/${id}`).pipe(catchError((error) => of(undefined)));
    }

    getSuggestions(query:string): Observable<HeroInterface[]> {
        return this.http.get<HeroInterface[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
    }
}