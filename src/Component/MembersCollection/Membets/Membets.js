import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';




const Members = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      console.log(data);
      
    }
  return (
    <div>
      <Navbar />
            <div className=" mt-5 activeMemberStyle d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">Your information</h3>
                    <input className="activeMember" type="text" placeholder="Your Full Name" {...register("Name", { required: true, maxLength: 30 })} />
                    <br />

                    <input className="activeMember" type="text" placeholder="Your Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <br />

                    <input className="activeMember" type="text" placeholder="Your Mobile Number" {...register("phone", { required: true, minLength: 6, maxLength: 12 })} />
                    <br />
                    
                    <input  className="activeMember" type="text" placeholder="Your Address" {...register("Address", { required: true, maxLength: 100})} />
                    <br />
                    
                    <input className="activeMember" type="text" placeholder="Your Father Name" {...register("Father", { required: true, maxLength: 30 })} />
                    <br />
                    
                    <input className="activeMember" type="text" placeholder="Your Education/Class " {...register("Education", { required: true, maxLength: 30 })} />
                    <br />
                    
                    <input className="activeMember" type="text" placeholder="Your School Name " {...register("School", { required: true, maxLength: 40 })} />
                    <br />
                    
                    <input className="activeMember" type="text" placeholder="Your Facebook Id Link" {...register("Facebook", { required: true, maxLength: 70  })} />
                    <br />
                    
                    <input className="activeMember" type="text" placeholder="Your village " {...register("village", { required: true, maxLength: 30 })} />
                    <br />

                    <input className="activeMember" type="text" placeholder="Your Date of birth" {...register("dateOfBirth", { required: true, maxLength: 30 })} />
                    <br />

                    <input className="activeMember" type="text" placeholder="Your Father Occupation " {...register("FatherOccupation", { required: true, maxLength: 30})} />
                    <br />

                    <input className="activeMember" type="text" placeholder="Your Aim" {...register("Aim", { required: true,  maxLength: 30 })} />
                    <br />

                    <select className="activeMember"  {...register("gender")}>
                      <option value="Other">Gender</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                    <br/>
                    <select className="activeMember"  {...register("Monthly")}>
                      <option value="50">Monthly Pay</option>
                      <option value="50">50Tk</option>
                      <option value="100">100Tk</option>
                      <option value="150">150Tk</option>
                      <option value="200">200Tk</option>
                      <option value="300">300Tk</option>
                      <option value="400">400Tk</option>
                      <option value="500">500Tk</option>
                      <option value="1000">1000Tk</option>
                    </select>
                    <br/>
                    <input className="ActiveBtn  activeMember" type="submit" />
                </form>
            </div>
            <Footer />
    </div>
  );
};

export default Members;