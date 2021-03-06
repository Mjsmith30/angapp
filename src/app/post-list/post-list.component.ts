import { Component, Input } from "@angular/core";
import { Post } from '..//posts/post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {

  // posts = [
  //   {title: 'first post', content: 'this is the first post'},
  //   {title: 'second post', content: 'this is the second post'},
  //   {title: 'third post', content: 'this is the third post'},
  //   {title: 'fourth post', content: 'this is the first post'}
  // ];
 @Input() posts: Post[] = [];
}
