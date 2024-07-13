import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="container mx-auto mt-10 font-Inter px-4 lg:px-0">
            <div className="md:flex gap-6 items-center">
                <div className='w-full md:w-1/2'>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-full md:w-1/2 border px-[30px] md:px-[65px] py-[30px] md:py-[65px] rounded-lg'>
                    <h3 className='text-center text-[40px] mb-12'>Sign In</h3>
                    <form onSubmit={handleSignIn}>
                        <label htmlFor="user_email">Email</label>
                        <input className='block w-full border mb-8 mt-5 outline-none px-6 py-3 rounded' id="user_email" type="email" placeholder='Your email' name='email' />
                        <label htmlFor="user_password">Confirm Password</label>
                        <input className='block w-full border mb-8 mt-5 outline-none px-6 py-3 rounded' type="password" name="password" id="user_password" />
                        <input className='block w-full border mb-8 mt-5 outline-none px-6 py-3 cursor-pointer bg-[#FF3811] text-white rounded' type="submit" value="Sign In" />
                        <p className='text-lg text-center mt-[30px]'>Or Sign Up with</p>
                        <div className='flex gap-3 mt-[30px] w-3/4 mx-auto'>
                            <div className="w-12 h-12 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer">
                                <FaFacebookF className='text-[#3B5998]' />
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer">
                                <FaLinkedinIn className='text-[#3B5998]' />
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer">
                                <FaGoogle className='text-[#3B5998]' />
                            </div>
                        </div>
                        <p className='text-center text-sm mt-12'>Have an account?<Link to='/signup' className='text-[#FF3811] font-semibold'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;