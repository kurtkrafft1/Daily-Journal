import API from "./data.js";
import DOMentries from "./DOMentries.js";

const searchBarManager = {
    searchValue (value) {
        API.snagJournalEntries().then(arr => {
            const newArr = [];
            arr.forEach(obj=> {
                const keys = Object.keys(obj);
                const vals = Object.values(obj);
                // console.log(keys);
                // console.log(vals);
               
                if (keys.includes(value)){
                    newArr.push(obj)
                }
                for(const val of vals){
                    if(typeof val==='object'){
                        if(val.mood.includes(value)){
                            newArr.push(obj);
                        }
                    }
                    if(typeof val === "string"){
                    
                    if (val.includes(value)){
                        console.log('yay')
                        newArr.push(obj);
                    }}
                }
                
            })
            DOMentries.insertEntry(newArr);
            // return newArr;
        })
    }
}



export default searchBarManager;
