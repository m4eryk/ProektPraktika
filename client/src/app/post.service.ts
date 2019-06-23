import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _postUrl = 'http://localhost:3000/api/post';
  private _treeUrl = 'http://localhost:3000/api/tree';
  private _deleteUrl = 'http://localhost:3000/api/delete';

  constructor(private http: HttpClient) { }

  getPost(props){
    return this.http.post<any>(this._postUrl, props)
  }

  getTree(props){
    return this.http.post<any>(this._treeUrl, props)
  }
  delete(props){
    return this.http.post<any>(this._deleteUrl, props)
  }
}
