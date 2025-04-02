import './Form.css'

export default function Form(){
    let dummyEmail = 'keng@gmail.com';
    let dummyPassword = '123';
    function login(info: any){
        const email = info.get('email')
        const password = info.get('password')
        if(email != dummyEmail && password != dummyPassword){
            alert("Email or Password is incorrect.")
        }else{
            alert("Yeahh!! Email and Password is correct!")
        }
    }
    return(
    <>
       <form action={login} method='get'>
            <input type="text" className='input' placeholder='Email' id='email' name='email' required/>
            <input type="password" className='input'  placeholder='Password' id='pw' name='password' required/>
            <button type='submit' className='submit_btn'>Login</button>
      </form>
    </>
    );
}