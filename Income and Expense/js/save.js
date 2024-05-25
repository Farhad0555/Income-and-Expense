// btn-save button clicked and info found 

document.getElementById('btn-save').addEventListener('click',function(){
    const mainincomecal=GetInputField('income');
    const mainsavecal=GetInputField('savecal');
    // total saving 
    const savingamountcal = (mainincomecal*mainsavecal)/100;

    // text filed called
    const balanceafterExpanse =GetTextField('Total-balance');
    // total Balance 
    const TotalremainingBalance = balanceafterExpanse-savingamountcal;

    setvalueatTextField('Saving-Amount',savingamountcal);
    setvalueatTextField('Remaining-Balance',TotalremainingBalance);


    
})