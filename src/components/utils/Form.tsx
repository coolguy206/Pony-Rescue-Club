import { useState, type ReactNode } from 'react';
import Close from '@/assets/global/close.svg';

type Props = {
  onClose?: () => void; // Added props type to accept a close trigger from parent component
};

export const Form = ({ onClose }: Props) => {
  const [result, setResult] = useState<ReactNode>('');
  const [error, setError] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // 1. Force the browser to validate its HTML 'required' & 'type' rules first
    if (!event.currentTarget.checkValidity()) {
      // If the browser finds an empty 'required' field, stop right here.
      // The browser will now automatically show its native error popup bubble.
      return;
    }

    event.preventDefault();
    setResult('');
    setError('');

    const target = event.currentTarget;
    const formData = new FormData(target);

    // 1. Extract Values
    const name = formData.get('Name') as string;
    const email = formData.get('Email') as string;
    const phone = formData.get('Phone') as string;
    const experience = formData.get('Experience') as string;

    const focusField = (name: string) => {
      const element = target.elements.namedItem(name) as
        HTMLInputElement | HTMLSelectElement | null;
      if (element) element.focus();
    };

    // 1. Name Validation
    if (!name || name.trim().length < 2) {
      setError('Please enter a valid name (at least 2 characters).');
      focusField('Name');
      return;
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      focusField('Email');
      return;
    }

    // 3. Phone Validation (Strips non-digits and checks for a valid 10-digit length)
    if (!phone || phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      setResult(''); // Clear any loading states
      focusField('Phone');
      return; // Absolute hard stop to prevent sending the form
    }

    // 4. Experience Dropdown Validation
    if (!experience) {
      setError('Please select your riding experience level.');
      focusField('Experience');
      return;
    }

    // 3. Submission Logic (Only runs if all checks pass)
    setResult('Sending....');
    formData.append('access_key', '768508d4-cb2a-46ca-86a9-7b517093344b');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult(
          <span>
            Form sent Successfully!
            <br /> Thank you for contacting Annie,
            <br /> she will get back to you shortly!
          </span>,
        );
        target.reset();
      } else {
        setError(data.message || 'Something went wrong.');
        setResult('');
      }
    } catch {
      setError('Network error. Please try again.');
      setResult('');
    }
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 z-[99] h-full w-full bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="fixed top-1/2 left-1/2 z-[999] flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-wrap items-center justify-center overflow-y-auto bg-white font-inter leading-tight lg:h-7/8 lg:w-7/8 xl:h-3/4 xl:w-3/4 2xl:h-3/4 2xl:w-1/2">
        <div className="text-center">
          <div className="flex justify-end py-10">
            <button
              className="flex items-center justify-end px-5 text-[6vw] font-bold md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]"
              onClick={onClose}
            >
              close{' '}
              <img
                src={Close}
                className="w-[8vw] md:w-[4vw] lg:w-[3vw] 2xl:w-[25px]"
              />
            </button>
          </div>
          <h2 className="mb-5 w-full text-[8vw] font-bold md:text-[4vw] lg:text-[3vw] 2xl:text-[32px]">
            Begin Your Journey
          </h2>
          <p className="mb-10 w-full text-[4vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-base">
            Tell us a little bit about yourself, and Annie
            <br className="block lg:hidden" /> will help match you
            <br className="hidden lg:block" /> with the perfect lesson
            <br className="block lg:hidden" /> plan and horse at Millwood Ranch.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto flex w-full flex-wrap justify-center gap-5 px-5 2xl:w-7/8 2xl:p-0"
          >
            <div className="w-full md:w-[48%] 2xl:w-[48%]">
              <label className="mb-5 block w-full text-left text-[6vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
                Rider Name
              </label>
              <input
                type="text"
                name="Name"
                required
                className="h-[45px] w-full bg-[#FDE6C6] px-5"
              />
            </div>
            <div className="w-full md:w-[48%] 2xl:w-[48%]">
              <label className="mb-5 block w-full text-left text-[6vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
                Email
              </label>
              <input
                type="email"
                name="Email"
                required
                className="h-[45px] w-full bg-[#FDE6C6] px-5"
              />
            </div>

            <div className="w-full lg:w-[48%] 2xl:w-[48%]">
              <label className="mb-2 block w-full text-left text-[6vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
                Phone Number
              </label>
              <input
                type="tel"
                name="Phone"
                maxLength={10}
                onChange={(e) => {
                  // Replaces any non-number character with an empty string instantly
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /[^0-9]/g,
                    '',
                  );
                }}
                required
                placeholder="(555) 555-5555"
                className="h-[45px] w-full bg-[#FDE6C6] px-5 placeholder-neutral-500"
              />
            </div>

            <div className="flex w-full flex-wrap justify-center gap-5">
              <div className="w-full md:w-[48%] lg:w-1/4">
                <label className="mb-5 block w-full text-left text-[6vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
                  Rider Age
                </label>
                <input
                  type="text"
                  name="Rider Age"
                  maxLength={3} // Prevents entering a 4-digit age
                  onChange={(e) => {
                    // Instantly wipes away any character that is not a digit (0-9)
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      '',
                    );
                  }}
                  required
                  className="h-[45px] w-full bg-[#FDE6C6] px-5"
                />
              </div>
              <div className="w-full md:w-[48%] lg:w-1/4">
                <label className="mb-5 block w-full text-left text-[6vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
                  Parent Name
                </label>
                <input
                  type="text"
                  name="Parent Name"
                  required
                  className="h-[45px] w-full bg-[#FDE6C6] px-5"
                />
              </div>
              <div className="w-full lg:w-1/4 2xl:w-3/8">
                <label className="mb-5 block w-full text-left text-[6vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
                  Experience Level
                </label>
                <select
                  name="Experience"
                  required
                  defaultValue=""
                  className="h-[45px] w-full cursor-pointer border-none bg-[#FDE6C6] px-5 outline-none"
                >
                  <option value="" disabled hidden>
                    Select an option...
                  </option>
                  <option value="none">Never Ridden / Absolute Beginner</option>
                  <option value="beginner">
                    Beginner (Ridden a few times)
                  </option>
                  <option value="intermediate">
                    Intermediate (Independent Walk/Trot)
                  </option>
                  <option value="advanced">
                    Advanced (Comfortable Lope/Canter)
                  </option>
                </select>
              </div>
            </div>
            <div className="h-auto w-full">
              <label className="mb-5 block w-full text-left text-[6vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
                Message
              </label>
              <textarea
                name="Message"
                required
                className="h-[40vw] w-full bg-[#FDE6C6] p-5 lg:h-[20vw] 2xl:h-[200px]"
              ></textarea>
            </div>
            <div className="block w-full text-left">
              <button
                type="submit"
                className="mx-auto inline-flex h-11.25 items-center justify-center bg-[#5D6615] px-7 font-inter font-bold text-[#fff] xl:h-13.75 xl:text-[24px]"
              >
                Submit
              </button>
            </div>
            <span className="text-red py-10 text-[5vw] font-bold md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
              {error}
            </span>
             <span className="text-green py-10 text-[5vw] font-bold md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
              {result}
            </span>
          </form>
        </div>
      </div>
    </>
  );
};
