import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { PostService } from 'src/app/post.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}





interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-admin-jss',
  templateUrl: './admin-jss.component.html',
  styleUrls: ['./admin-jss.component.css']
})
export class AdminJssComponent implements OnInit {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
 
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  post;

  treeControl = new FlatTreeControl<ExampleFlatNode>( node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private _post: PostService
    ) {
    this._post.getTree('jsconfig.json').subscribe(
      res => { const TREE_DATA: FoodNode[] = res;
        setTimeout(() => {
          this.dataSource.data = TREE_DATA;
        })
      }
    )
    
    
  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit() {
    
  }

  getPost(name){
    return new Promise( ( resolve, reject) => {
      this._post.getPost(name).subscribe(
        res => {
          resolve(res);
        }
      );
    });
  }

  async selectPost(name){
   this.post = await this.getPost( { name : name } )
  }

  delete(name){
    var props = {
      name : name,
      url : 'jsconfig.json'
    }
      this._post.delete(props).subscribe(
        res => {  }
      );
  }
}
