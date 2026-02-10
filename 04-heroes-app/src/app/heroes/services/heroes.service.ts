import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
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

    addHero(hero: HeroInterface): Observable<HeroInterface> {
        return this.http.post<HeroInterface>(`${this.baseUrl}/heroes`, hero);
    }

    updateHero(hero: HeroInterface): Observable<HeroInterface> {
        if ( !hero.id ) throw Error('Hero id is required');
        return this.http.put<HeroInterface>(`${this.baseUrl}/heroes/${hero.id}`, hero);
    }

    deleteHero(id: string): Observable<boolean> {
        return this.http.delete<void>(`${this.baseUrl}/heroes/${id}`)
        .pipe(map(response => true), catchError(error => of(false)));
    }


}