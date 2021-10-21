import { Component, Input, OnInit } from '@angular/core';

import { Review } from 'src/app/shared/interface/review.interface';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
    @Input() commentList: Review;

    constructor() {}

    ngOnInit(): void {}
}
