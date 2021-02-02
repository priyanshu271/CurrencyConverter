import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import {ExchangeRatesService} from '../exchange-rates.service';



@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {
  amount=1;
  from='INR';
  to='USD';
  rates!:{[key:string]:number};
  convert():number{
    return this.amount*this.rates[this.to];

  }
  loadRates(){
    this.service.getRates(this.from).subscribe(res=>this.rates=res.rates);
  }
  getAllCurrencies():string[]{
    return Object.keys(this.rates);
  }
constructor(private service:ExchangeRatesService){

}
  ngOnInit():void{
    this.loadRates();

  }

}
