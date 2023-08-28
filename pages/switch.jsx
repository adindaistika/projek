import { useEffect } from "react"

export default function While() {
    useEffect(()=> {
        //  let angka = prompt('masukkan angka :');
        //  switch(angka) {
        //      case 1 :
        //          alert('anda memasukkan angka 1');
        //          break;
        //      case 2 :
        //         alert('anda memasukkan angka 2');
        //         break;
        //     case  3 :
        //         alert('anda memasukkan angka 3');
        //         break;
        //     default :
        //         alert('angka yang anada masukkan salah');
        //         break;
        // }
            // let s ='';
            // for( let i = 0; i < 5; i++){
            //     for(let d = 0; d <= i; d++){
            //         s += '*';
            //     }
            //     s +='\n';
            // }
            // console.log(s);

            //membangkitkan bilangan random
            let p = prompt('pilih : gajah,semut,orang');
            let comp = Math.random();

            if(comp < 0,34 ) {
                comp ='gajah';
            } else if (comp >= 0.34 && comp < 0.67) {
                comp = 'orang';
            } else {
                comp = 'semut';
            }

            let hasil = '';
            //menentukan rules
            if(p == comp){
                hasil ='SERI';
            } else if( p == 'gajah'){
                hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
            } else if(p == 'orang'){
                hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
            } else if (p == 'semut'){
                hasil =( comp == 'orang') ? 'KALAH' : 'MENANG';
            } else {
                hasil ='Memasukan pilihan yang salah';
            }
        
        //tampilan hasilnya
        alert('Kamu memilih : ' + p + ' dan komputer memilih :' + comp + '\nMaka hasilnya : Kamu ' + hasil); 

    },[]) 

    return(
        <div>

        </div>
    )
}