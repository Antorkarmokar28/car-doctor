import loginImg from '../../assets/images/login/login.svg'
const SignIn = () => {
    return (
        <div className="container mx-auto mt-10 font-Inter">
            <div className="md:flex gap-6">
                <div className='w-full md:w-1/2'>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-full md:w-1/2 border px-[65] py-[65]'>
                    <h3 className='text-center text-[40px] mb-12'>SignIn</h3>
                    <form >
                        <label htmlFor="user_email">Email</label>
                        <input className='block w-full rounded px-6 py-3 border' id="user_email" type="email" placeholder='Your email' name='email' />
                        <label htmlFor="user_password">Confirm Password</label>
                        <input className='block w-full rounded px-6 py-3 border' type="password" name="password" id="user_password" />
                        <input className='block w-full rounded px-6 py-3 cursor-pointer' type="button" value="SignIn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;