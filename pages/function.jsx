import { useEffect } from "react"

export default function While() {
    useEffect(()=> {
        // menjumlahkan volume 2 kubus
        // let a = 8;
        // let b = 3;
        // let volumeA;
        // let volumeB;
        // let total;

        // volumeA = a * a * a
        // volumeB = b * b * b 

        // total = volumeA + volumeB;

        // console.log(total);

        //cara 2
        // function jumlahVolumeDuaKubus(a,b) {
        //     let volumeA;
        //     let volumeB;
        //     let total;

        //     volumeA = a * a * a;
        //     volumeB = b * b * b;

        //     total = volumeA + volumeB;

        //     return total;
        // }
        // console.log(jumlahVolumeDuaKubus(8,3));
        // console.log(jumlahVolumeDuaKubus(10,23));

        //contoh paramater dan argument 
        // function tambah(a,b) {
        //     return a + b;
        // }
        // // // let hasil = tambah(2,4);
        // // // console.log(hasil);
        // function kali(a,b){
        //     return a * b;
        // }
        // let hasil = kali(tambah(1,2), tambah(3,4));
        // console.log(hasil);


        //eexecutin context,hoisting & scope

        const nama = 'adinda';
        const umur = 21;
        
        console.log(sayHello());

        function sayHello() {
            return 'halo, nama saya ${nama}, saya ${umur} tahun.';
        }

        
    },[]) 
    return(
        <div>

        </div>
    )
}