import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../interface/review.interface';

@Component({
    selector: 'app-list-img',
    templateUrl: './list-img.component.html',
    styleUrls: ['./list-img.component.scss'],
})
export class ListImgComponent implements OnInit {
    @Input() productItem: Review[];

    constructor() {}

    ngOnInit(): void {}
}
