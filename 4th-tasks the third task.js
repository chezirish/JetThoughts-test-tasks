
// var arr = ['cat', 'cat', 'dog', 'dog', 'dog'];
var arr = ['squirrel', 'squirrel', 'cat', 'cat', 'dog', 'dog', 'dog', 'owl', 'cat','dog', 'cat', 'cat', 'dog', 'dog', 'owl',];
      
      
function countMatches(arr){
    let matches = [];
    let index = 0;
    for(let i=0; i<arr.length; i++){
        let item = arr[i];
        let count = 0;
        let lastElm = null;

        if(item === null){
            continue;
        }

        if(!matches.includes(item)){
            matches.push(item);
        }

        for(let i=0; i<arr.length; i++){
            if(matches[index] === arr[i]){
                arr[i] = null;
                count++;
                lastElm = index;
            }
        }

        if(count > 2){
            matches[lastElm] += " (" + count + ")";
        } else if(count === 2){
            matches[lastElm + 1] = matches[lastElm];
        }
        index++;
    }
    return matches
}

console.log(countMatches(arr));
