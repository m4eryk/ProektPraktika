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
  selector: 'app-htmlcontent',
  templateUrl: './htmlcontent.component.html',
  styleUrls: ['./htmlcontent.component.css']
})
export class HTMLcontentComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }


  treeControl = new FlatTreeControl<ExampleFlatNode>( node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  post;
  
  constructor(
    private _post: PostService) {
    this._post.getTree('htmlconfig.json').subscribe(
      res => { const TREE_DATA: FoodNode[] = res;
        setTimeout(() => {
          this.dataSource.data = TREE_DATA;
        }, 4000)
    })
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


}
