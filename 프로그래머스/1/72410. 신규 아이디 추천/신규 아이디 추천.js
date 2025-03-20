function solution(new_id) {
    const prohibit = `~!@#$%^&*()=+[{]}:?,<>/`.split('');
    
    //1
    new_id = new_id.toLowerCase();
    
    //2
    prohibit.forEach(v => new_id = new_id.replaceAll(v,''));
    
    //3, 4
    new_id = new_id.split('.').filter(v=>v!=='').join('.');
    console.log(new_id);
    
    //5
    let nl = new_id.length;
    if (nl===0) new_id='a';
    
    //6
    if (nl>=16) new_id = new_id.substring(0,15);
    if (new_id[new_id.length-1]==='.') new_id = new_id.substring(0,new_id.length-1);
    
    //7
    nl = new_id.length;
    if (nl<3) new_id+=new_id[nl-1];
    if (nl<2) new_id+=new_id[nl-1];
    
    return new_id;
}