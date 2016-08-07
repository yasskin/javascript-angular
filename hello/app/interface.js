console.log("Hello World")

 interface Noisy {
   sound: string;
   angryNoise(): void;
   happyNoise(): void;
 }

 class BabyElephant implements Noisy {
   constructor(public sound: string) {}
   angryNoise(){
     console.log("rumble")
   }
   happyNoise(){
     console.log("trumpet")
   }
 }

 class Puppy implements Noisy {
   constructor(public sound: string) {}
   angryNoise(){
     console.log("growl");
   }
   happyNoise(){
     console.log("bark");
   }
 }
