import { Component } from "@angular/core";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {

  post = [
    {title: 'first post', content: 'this is the first post'},
    {title: 'first post', content: 'this is the first post'},
    {title: 'first post', content: 'this is the first post'},
    {title: 'first post', content: 'this is the first post'}
  ];
}
