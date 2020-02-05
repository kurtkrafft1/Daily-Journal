const noCursing = {
    testforCurses: (strOne, strTwo) => {
        const arr = strOne.split(" ")
        const arrtwo = strTwo.split(" ")
        arrtwo.forEach(item => {
            arr.push(item);
        })
        for (let i=0; i<arr.length; i++){
            if (arr[i]=='fuck'|| arr[i]=='shit'|| arr[i]=='damn'|| arr[i]=='ass'|| arr[i]=='cunt'|| arr[i]=='bitch') {
                alert(`Looks like you said a no-no word. The word you accidentally used was "${arr[i]}"`)
                return false;
            } else if (i===arr.length-1){
                return true;
            }
        }
        
    }
}


const formValidation = {
    testFormValidity: (obj) => {
        const arr = obj.topic.split("");
        if (arr.length > 15){
            alert('Im sorry the Concepts Covered title is too long. 10 characters max')
            return false
        } 
        if (obj.date ==="") {
            alert("Please enter a date")
            return false;
        }
        else if (obj.topic ==="") {
            alert("Please enter something in the concepts covered section")
            return false;
        }else if (obj.mood === 'pleaseSelect') {
            alert("Please select a mood")
            return false;
        }else if (obj.textarea ==="") {
            alert("Please fill out the entry section")
            return false;
        } else if (noCursing.testforCurses(obj.topic, obj.textarea)) {
            return obj;
        }
    }
}

export default formValidation;