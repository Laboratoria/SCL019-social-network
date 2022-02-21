export const showPassword = (e) =>{
    e.preventDefault()
    let p1 = document.getElementById("password");
    if(p1.type == "password"){
        p1.type = "text"; 
    }else{
        p1.type = "password";
    }
};

export const showPassword2 = (e) =>{
    e.preventDefault()
    let p2 = document.getElementById("confPassword");
    if(p2.type == "password"){
        p2.type = "text"; 
    }else{
        p2.type = "password";
    }

};

