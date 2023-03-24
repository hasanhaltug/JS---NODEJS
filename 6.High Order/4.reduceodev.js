const parantez = ')(';

function parantezlerDengeliMi(gelen)
{
    const dizi = gelen.split();
    let baslangic = false ;
    const sonuc = dizi.reduce(function(pre,eleman,index){
        
        if(index == 0 && eleman[0] === '(')
            baslangic = true;

        for(let i = 0 ; i < eleman.length ; i++)
        {   
            if(eleman[i] == '(' && baslangic == true)
            {
                pre = pre + 1;
            }
            else
            pre = pre - 1;
        }
        
        return pre;
    },0);

    if(sonuc == 0 )
    {
        console.log("Dengeli");
    }
    else
        console.log("Dengesiz");
};

parantezlerDengeliMi(parantez);