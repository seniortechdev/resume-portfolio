import React, { useState } from 'react';

interface Errors {
  [key: string]: string;
}

const Contact = () => {
  const [errors, setErrors] = useState<Errors>({});

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, message } = event.currentTarget.elements as any;
    const newErrors: { [key: string]: string } = {};

    if (!name.value.trim()) {
      newErrors.name = 'Please input your name';
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      newErrors.email = 'Please input a valid email address';
    }

    if (!message.value.trim()) {
      newErrors.message = 'Please input a message';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Submit the form using the HTMLFormElement submit() method
        const formData = new FormData();
        formData.append('name', name.value.trim());
        formData.append('email', email.value.trim());
        formData.append('message', message.value.trim());

       await fetch('https://formspree.io/f/mdorawjd', {
        method: 'POST',
        body: formData,
      });
      } catch (error) {
      }
    }
  };

  return (
    <div className='py-20 w-full px-5'>
      <section className='flex flex-col justify-center items-center gap-5'>
        <span className='text-center text-3xl'>Tell me about your project.</span>
        <form className='flex flex-col gap-4 text-xl' action="https://formspree.io/f/mdorawjd" method="POST" onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            Name:
            <br />
            <input className='border-2 w-[80vw] tablet:w-[60vw] desktop:w-[50vw] px-3' type="text" placeholder="E.g. John Smith" id="name" name="name" />
            <br />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <label htmlFor="email">
            Email:
            <br />
            <input className='border-2 w-[80vw] tablet:w-[60vw] desktop:w-[50vw] px-3' type="email" placeholder="E.g. johnsmith@email.com" id="email" name="email" />
            <br />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </label>
          <label htmlFor="message" className="body-font">
            Project:
            <br />
            <textarea className='border-2 w-[80vw] tablet:w-[60vw] desktop:w-[50vw] h-[30vh] px-3' placeholder="Message" id="message" name="message" />
            <br />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </label>
          <section className="w-[80vw] tablet:w-[60vw] desktop:w-[50vw] flex flex-row justify-end">
            <button className="border-2 p-2 rounded-md" name="submit" type="submit">
              Submit
            </button>
          </section>
        </form>
      </section>
    </div>
  )
}

export default Contact;
