function superbowlWin(record){
    if(record[0].year){
        let b = record.find(o => o.result === 'W');
        return b.year
    }else{
        return record.find(c => c.result ==="W")
    }
}



// code your solution here
