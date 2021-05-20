import { Component, ViewChild } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';



@Component(
    {
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: [
            './app.component.css',
            './app2.component.css'
        ]
    }
)
export class AppComponent {
    title = 'Angular!';

    password = '';
    correctPassword = 'test';
    color = 'green';
    amount: number;

    products = [
        {
            sku: 'T-1209',
            name: 'T Shirt',
            price: '120'
        },
        {
            sku: 'T-1210',
            name: 'Shoes',
            price: '220'
        }
    ]

    checkPassword() {
        if (this.password === this.correctPassword) {
            return true;
        } else {
            return false;
        }
    }

    getColor() {
        return 'yellow';
    }

    addProduct() {
        this.products.push(
            {
                sku: 'Cap-20394',
                name: 'Cap',
                price: '10'
            }
        )
    }


    deleteProduct(i) {
        this.products.splice(i, 1);
    }
}


