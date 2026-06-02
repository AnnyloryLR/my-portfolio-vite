import styled from "styled-components";
import React, { useState } from 'react';

const Contact = () => {
    
        return (
        <ContactContainer>
        <Title>Contact Me</Title>
        <Paragraph>Feel free to reach out to me using the form below or through my email: annyloryros@gmail.com</Paragraph>

        </ContactContainer>
     )
}

export default Contact;

const ContactContainer = styled.div` 
  min-height: 100vh;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: clamp(1rem, 5vw, 4rem);
    
`
const Paragraph = styled.p`
  font-size: clamp(1rem, 5vw, 1.5rem);
  line-height: 2;
  text-align: justify;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  a {
      color:#555;
      text-decoration: none;
      &:hover {
        color: #007bff;
      }
  }
`



// interface WorkContact {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   company: string;
//   jobTitle: string;
//   department: string;
//   address: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   country: string;
//   message?: string;
// }

// interface FormErrors {
//   [key: string]: string;
// }

// const WorkContactForm: React.FC = () => {
//   const [formData, setFormData] = useState<WorkContact>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     company: '',
//     jobTitle: '',
//     department: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitted, setSubmitted] = useState(false);

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.company.trim()) newErrors.company = 'Company is required';
//     if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
//     if (!formData.city.trim()) newErrors.city = 'City is required';
//     if (!formData.country.trim()) newErrors.country = 'Country is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ): void => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Clear error for this field when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: '',
//       }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       console.log('Form submitted:', formData);
//       setSubmitted(true);
//       // Reset form after submission
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         company: '',
//         jobTitle: '',
//         department: '',
//         address: '',
//         city: '',
//         state: '',
//         zipCode: '',
//         country: '',
//         message: '',
//       });
//       // Hide success message after 3 seconds
//       setTimeout(() => setSubmitted(false), 3000);
//     }
//   };

//   return (
//     <div className='work-contact-form-container'>
//       <h2>Work Contact Information</h2>
      
//       {submitted && (
//         <div className='success-message'>
//           ✓ Form submitted successfully!
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className='work-contact-form'>
//         {/* Personal Information Section */}
//         <fieldset>
//           <legend>Personal Information</legend>
          
//           <div className='form-row'>
//             <div className='form-group'>
//               <label htmlFor='firstName'>First Name *</label>
//               <input
//                 type='text'
//                 id='firstName'
//                 name='firstName'
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className={errors.firstName ? 'input-error' : ''}
//               />
//               {errors.firstName && <span className='error-text'>{errors.firstName}</span>}
//             </div>

//             <div className='form-group'>
//               <label htmlFor='lastName'>Last Name *</label>
//               <input
//                 type='text'
//                 id='lastName'
//                 name='lastName'
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className={errors.lastName ? 'input-error' : ''}
//               />
//               {errors.lastName && <span className='error-text'>{errors.lastName}</span>}
//             </div>
//           </div>

//           <div className='form-row'>
//             <div className='form-group'>
//               <label htmlFor='email'>Email *</label>
//               <input
//                 type='email'
//                 id='email'
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={errors.email ? 'input-error' : ''}
//               />
//               {errors.email && <span className='error-text'>{errors.email}</span>}
//             </div>

//             <div className='form-group'>
//               <label htmlFor='phone'>Phone *</label>
//               <input
//                 type='tel'
//                 id='phone'
//                 name='phone'
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className={errors.phone ? 'input-error' : ''}
//               />
//               {errors.phone && <span className='error-text'>{errors.phone}</span>}
//             </div>
//           </div>
//         </fieldset>

//         {/* Work Information Section */}
//         <fieldset>
//           <legend>Work Information</legend>
          
//           <div className='form-row'>
//             <div className='form-group'>
//               <label htmlFor='company'>Company *</label>
//               <input
//                 type='text'
//                 id='company'
//                 name='company'
//                 value={formData.company}
//                 onChange={handleChange}
//                 className={errors.company ? 'input-error' : ''}
//               />
//               {errors.company && <span className='error-text'>{errors.company}</span>}
//             </div>

//             <div className='form-group'>
//               <label htmlFor='jobTitle'>Job Title *</label>
//               <input
//                 type='text'
//                 id='jobTitle'
//                 name='jobTitle'
//                 value={formData.jobTitle}
//                 onChange={handleChange}
//                 className={errors.jobTitle ? 'input-error' : ''}
//               />
//               {errors.jobTitle && <span className='error-text'>{errors.jobTitle}</span>}
//             </div>
//           </div>

//           <div className='form-group'>
//             <label htmlFor='department'>Department</label>
//             <input
//               type='text'
//               id='department'
//               name='department'
//               value={formData.department}
//               onChange={handleChange}
//             />
//           </div>
//         </fieldset>

//         {/* Address Section */}
//         <fieldset>
//           <legend>Address</legend>
          
//           <div className='form-group'>
//             <label htmlFor='address'>Street Address</label>
//             <input
//               type='text'
//               id='address'
//               name='address'
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </div>

//           <div className='form-row'>
//             <div className='form-group'>
//               <label htmlFor='city'>City *</label>
//               <input
//                 type='text'
//                 id='city'
//                 name='city'
//                 value={formData.city}
//                 onChange={handleChange}
//                 className={errors.city ? 'input-error' : ''}
//               />
//               {errors.city && <span className='error-text'>{errors.city}</span>}
//             </div>

//             <div className='form-group'>
//               <label htmlFor='state'>State/Province</label>
//               <input
//                 type='text'
//                 id='state'
//                 name='state'
//                 value={formData.state}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className='form-group'>
//               <label htmlFor='zipCode'>Zip/Postal Code</label>
//               <input
//                 type='text'
//                 id='zipCode'
//                 name='zipCode'
//                 value={formData.zipCode}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className='form-group'>
//             <label htmlFor='country'>Country *</label>
//             <input
//               type='text'
//               id='country'
//               name='country'
//               value={formData.country}
//               onChange={handleChange}
//               className={errors.country ? 'input-error' : ''}
//             />
//             {errors.country && <span className='error-text'>{errors.country}</span>}
//           </div>
//         </fieldset>

//         {/* Additional Message */}
//         <div className='form-group'>
//           <label htmlFor='message'>Additional Message</label>
//           <textarea
//             id='message'
//             name='message'
//             value={formData.message}
//             onChange={handleChange}
//             rows={5}
//             placeholder='Add any additional information...'
//           />
//         </div>

//         {/* Submit Button */}
//         <button type='submit' className='submit-btn'>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default WorkContactForm;
