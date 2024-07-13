import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const SingUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="container mx-auto mt-10 font-Inter px-4 lg:px-0">
            <div className="md:flex gap-6 items-center">
                <div className='w-full md:w-1/2'>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-full md:w-1/2 border px-[30px] py-[30px] md:px-[65px] md:py-[65px] rounded-lg'>
                    <h3 className='text-center text-[40px] mb-12'>Sign Up</h3>
                    <form onSubmit={handleSignUp} >
                        <label htmlFor="user_name">Name</label>
                        <input className='block w-full rounded px-6 py-3 border mb-8 mt-5 outline-none' id="user_name" type="text" placeholder="Your name" name='name' />
                        <label htmlFor="user_email">Email</label>
                        <input className='block w-full rounded px-6 py-3 border mb-8 mt-5 outline-none' id="user_email" type="email" placeholder='Your email' name='email' />
                        <label htmlFor="user_password">Confirm Password</label>
                        <input className='block w-full rounded px-6 py-3 border mb-8 mt-5 outline-none' type="password" placeholder='Your password' name="password" id="user_password" />
                        <input className='block w-full cursor-pointer rounded px-6 py-3 border bg-[#FF3811] text-white' type="submit" value="Sign Up" />
                    </form>
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
                    <p className='text-center text-sm mt-12'>Already have an account?<Link to='/signin' className='text-[#FF3811] font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;