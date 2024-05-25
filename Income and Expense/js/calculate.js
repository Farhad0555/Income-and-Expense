document.getElementById('btn-calculate').addEventListener('click',function(){
    const mainIncome = GetInputField('income');
    const food = GetInputField('food');
    const rent = GetInputField('rent');
    const cloth = GetInputField('cloths');
    const TotalExpanseCal= food+rent+cloth;
    const BalanceCal=mainIncome-TotalExpanseCal;
    
    setvalueatTextField('Total-expanse',TotalExpanseCal);
    setvalueatTextField('Total-balance',BalanceCal);
})