import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post; 
  content = { }
  constructor() { }

  ngOnInit() {
    console.log(this.getExampl('dwadawd'))
  }

  getExampl(exempls){
    return exempls.toString()
  }
}
