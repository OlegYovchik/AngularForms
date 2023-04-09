import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public title = "rent a car";
  constructor(){}

  ngOnInit(): void {
    {
      // function palindrom(inp: string){
      //   let text = inp.toLowerCase();
      //   let res = inp.split('').reverse().join('').toLowerCase();
      //   console.log(text===res);
      // }
      // palindrom('Annap');
      //==================================================================
      // function fizzbuzz(inp: number){
      //   for(let i = 1; i <= inp; i++){
      //     if(i%3===0){console.log('fizz')}else if(i%5===0){console.log('buzz')}else{console.log(i)}
      //   }
      // }
      // fizzbuzz(25);
      //====================================================================
      // function anagram(text1: string, text2: string){
      //   let res = text2.toLowerCase().split('').sort().join('')===text1.toLowerCase().split('').sort().join('');
      //   console.log(res);
      // }
      // anagram('finger','friend');
      //====================================================================
      // function findVowers(str: string){
      //   let vowers = ['a', 'e', 'i', 'o', 'u'];
      //   let count = 0;
      //   for(let i = 0; i < str.length; i++){
      //     for(let j = 0; j < vowers.length; j++){
      //       if(str[i]===vowers[j])count++;
      //     }
      //   }
      //   console.log(count);
      // }
      // findVowers('pathfinder');
      //=======================================================================
      function fibonacci(num: number){
        let arrFibonacci = [0,1]
        for(let i = 2; i < num; i++){
          arrFibonacci.push(arrFibonacci[i-2] + arrFibonacci[i-1]);
        }
        console.log(arrFibonacci);
      }
      fibonacci(10);
      //============================================================================
      const dayStart = "07:30";
      const dayEnd = "17:45";
      function scheduleMeeting(startTime: any,durationMinutes: any) {
        let addDateStart = Date.parse("1970-01-01T" + dayStart);
        let addDateEnd = Date.parse("1970-01-01T" + dayEnd);
        let timeMeetingStart = Date.parse("1970-01-01T" + startTime);
        let timeMeetingEnd = Date.parse("1970-01-01T" + startTime) + durationMinutes * 1000 * 60;
        if(timeMeetingStart >= addDateStart && timeMeetingEnd <= addDateEnd){
          console.log(true)
        }else{
          console.log(false)
        }
      }
      scheduleMeeting('17:16',30);
      //===================================================================================
      function range(start: number, end?: number){
        let arr = [];
        if(end===0){
          return;
        }else if(start === end){
          arr.push(start)
        }else{
          if(end)
          for(let i = start; i <= end; i++){
            arr.push(i);
          }
        }
        console.log(arr);
      }
      range(3,0);
      //====================================================================================
      var i = function(a:number, b: number){
        console.log(...arguments)
      }
      i(9,12);
      //=====================================================================================
      class Car {
        engine = 'disel'
        vheels = 4
      }
      class Moto extends Car{
        override vheels = 2
      }
      console.log(Car)
    }
  }
}
