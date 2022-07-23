
function EyesOnMe(){

    //function to handle onFocus
    function focus(){
        console.log("Good!")
    }

    //function to handle onBlur
    function blur(){
        console.log("Hey! Eyes on me!")
    }

    return <button onFocus={focus} onBlur={blur}>Eyes on me</button>
}

export default EyesOnMe