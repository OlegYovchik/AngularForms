import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public title = "rent a car";
  @ContentChild('h')table?: TemplateRef<unknown>
  constructor(){}
  ngAfterViewInit(){
    console.log(this.table)
  }
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
      // function fibonacci(num: number){
      //   let arrFibonacci = [0,1]
      //   for(let i = 2; i < num; i++){
      //     arrFibonacci.push(arrFibonacci[i-2] + arrFibonacci[i-1]);
      //   }
      //   console.log(arrFibonacci);
      // }
      // fibonacci(10);
      //============================================================================
      // const dayStart = "07:30";
      // const dayEnd = "17:45";
      // function scheduleMeeting(startTime: any,durationMinutes: any) {
      //   let addDateStart = Date.parse("1970-01-01T" + dayStart);
      //   let addDateEnd = Date.parse("1970-01-01T" + dayEnd);
      //   let timeMeetingStart = Date.parse("1970-01-01T" + startTime);
      //   let timeMeetingEnd = Date.parse("1970-01-01T" + startTime) + durationMinutes * 1000 * 60;
      //   if(timeMeetingStart >= addDateStart && timeMeetingEnd <= addDateEnd){
      //     console.log(true)
      //   }else{
      //     console.log(false)
      //   }
      // }
      // scheduleMeeting('17:16',30);
      //===================================================================================
      // function range(start: number, end?: number){
      //   let arr = [];
      //   if(end===0){
      //     return;
      //   }else if(start === end){
      //     arr.push(start)
      //   }else{
      //     if(end)
      //     for(let i = start; i <= end; i++){
      //       arr.push(i);
      //     }
      //   }
      //   console.log(arr);
      // }
      // range(3,0);
      //====================================================================================
      // var i = function(a:number, b: number){
      //   console.log(...arguments)
      // }
      // i(9,12);
      //=====================================================================================
      //   class Car {
      //     engine = 'disel'
      //     vheels = 4
      //   }
      //   class Moto extends Car{
      //     override vheels = 2
      //   }
      //   console.log(Car)
      // }
      //==================================================================================
      // let arr = [];
      // let words = 'Hello my dear friends! How are you?';
      // let word = '';
      // for(let i=0;i<=words.length;i++){
      //   if(words[i]==' '){
      //     arr.push(word);
      //     word = '';
      //   }else if(i===words.length){
      //     arr.push(word)
      //   }else{
      //     word += words[i];
      //   }
      // }
      // let newArr = words.split(' ');
      // console.log(arr,newArr);
      // let obj = [{
      //   a: 45,
      //   b: 34
      // }]
      // let obj1 = [...obj];
      // console.log(obj===obj1)
      //@ts-ignore
      function rotate(str){
        let newStr = str;
        let str1 = '';
        let str2 = '';
        let arr = [];
        for(let i = 0; i < newStr.length; i++){
          str1 = newStr.slice(i+1, newStr.length);
          str2 = newStr.slice(0,i+1);
          arr.push(str1+str2);
        }
        console.log(arr);
      }rotate("Hello");
      //===========================================================
      function compareNumbers(a:number, b:number) {
        return a - b;
      }

      function sortByLength (array:string []) {
          let numStr:number [] = [];
          array.forEach(item=> numStr.push(item.length));
          console.log(numStr)
      }
      sortByLength(['buenossss','hell','hello','privet']);
    }
  }
}
