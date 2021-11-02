import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-address-order',
    templateUrl: './address-order.component.html',
    styleUrls: ['./address-order.component.scss'],
})
export class AddressOrderComponent implements OnInit {
    public myForm: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.myForm = new FormGroup({
            city: new FormControl('', Validators.required),
            street: new FormControl('', Validators.required),
            house: new FormControl('', Validators.required),
            telephone: new FormControl('', [Validators.minLength(7), Validators.maxLength(16)]),
            dateDelivery: new FormControl('', Validators.required),
            cardOrCash: new FormControl('', Validators.required),
        });
    }
}
