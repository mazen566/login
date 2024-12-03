var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPass = document.getElementById('signupPass');
var btnSignup = document.getElementById('btnSignup');
var aSignin = document.getElementById('aSignin');

var signinEmail = document.getElementById('signinEmail');
var signinPass = document.getElementById('signinPass');
var btnSignin = document.getElementById('btnSignin');
var aSignup = document.getElementById('aSignup');


var upData = [];
if(localStorage.getItem('upData'),localStorage.getItem('inData'))
    {
        upData = JSON.parse(localStorage.getItem('upData'));
        inData = JSON.parse(localStorage.getItem('inData'));

    }
    function addSignupData()
{
    if(validation())
        {
            var signupObj = {
            upName:signupName.value,
            upEmail:signupEmail.value,
            upPass:signupPass.value,
        }
        upData.push(signupObj);
        console.log(upData);
        localStorage.setItem('upData',JSON.stringify(upData));
        clearFull();
    }
}

var inData = [];
function addSigninData()
{
    var signinObj = {
        inEmail:signinEmail.value,
        inPass:signinPass.value,
    }
    inData.push(signinObj);
    console.log(inData);
    localStorage.setItem('inData',JSON.stringify(inData));
    clearFull();
}


function clearFull()
{
    signupName.value = null;
    signupEmail.value = null;
    signupPass.value = null;
}

function validation()
{
    var regex = /^\w+(\@gmail\.com)$/;
    if(regex.test(signupEmail.value))
    {
        signupEmail.classList.add('is-valid');
        signupEmail.classList.remove('is-invalid');
        return true;
    }
    else
    {
        signupEmail.classList.add('is-invalid');
        signupEmail.classList.remove('is-valid');
        return false;
    }
}

function switchSignin()
{
    signupName.classList.add('d-none');
    signupEmail.classList.add('d-none');
    signupPass.classList.add('d-none');
    btnSignup.classList.add('d-none');
    aSignin.classList.add('d-none');
    signinEmail.classList.remove('d-none');
    signinPass.classList.remove('d-none');
    btnSignin.classList.remove('d-none');
    aSignup.classList.remove('d-none');
}
function switchToSignup()
{
    signupName.classList.remove('d-none');
    signupEmail.classList.remove('d-none');
    signupPass.classList.remove('d-none');
    btnSignup.classList.remove('d-none');
    aSignin.classList.remove('d-none');
    signinEmail.classList.add('d-none');
    signinPass.classList.add('d-none');
    btnSignin.classList.add('d-none');
    aSignup.classList.add('d-none');
}