import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"
import {Http} from "@angular/http"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
import {Store} from "./store/store.model"
import {MEAT_API} from "../app.api"
import {ClothesItem} from "../store-detail/clothes-item/clothes-item.model"

@Injectable()
export class StoresService{
  constructor(private http:Http){}

  stores(): Observable<Store[]>{
    return this.http.get(`${MEAT_API}/stores`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  storeById(id: string): Observable<Store>{
    return this.http.get(`${MEAT_API}/stores/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfStore(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/stores/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  clothesOfStore(id: string): Observable<ClothesItem[]>{
    return this.http.get(`${MEAT_API}/stores/${id}/clothes`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}
