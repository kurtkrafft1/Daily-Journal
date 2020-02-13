import API from "./data.js";
import DOMentries from "./DOMentries.js";

const searchBarManager = {
    searchValue (value) {
        API.snagJournalEntries().then(arr => {
            const newArr = [];
            arr.forEach(obj=> {

                const keys = Object.keys(obj);
                const vals = Object.values(obj);

               
                if (keys.includes(value)){
                    newArr.push(obj)
                }
                for(const val of vals){
                   console.log(val)
                    if(typeof val==='object'){
                        if(val.mood){
                            const otherVal = val.mood.toLowerCase();
                            if(otherVal.includes(value)){
                                newArr.push(obj);
                            }
                        } else if(val.teach){ 
                            const newval= val.teach.toLowerCase();
                            if(newval.includes(value)){  
                                
                                newArr.push(obj);
                            }
                        } 
                        
                    }
                    if(typeof val === "string"){
                        const newVal = val.toLowerCase();
                    
                    if (newVal.includes(value)){

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
