import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleInputChange = function () {
    const textarea = document.getElementById('ok');
    const words = textarea.value.split(' ');
   
    const nonEmptyWords = words.filter(word => word.trim() !== '');
    setCount(nonEmptyWords.length);
  };

  return (
    <>
      <main className="grid h-screen place-items-center">
        <div className="shadow-2xl p-9">
          <div className="text-3xl font-serif flex flex-wrap text-center mt-5">Responsive Paragraph Word Counter</div>
          <div className="relative mb-3 border rounded-lg mt-8" data-te-input-wrapper-init>
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="ok"
              rows="6"
              onChange={handleInputChange} 
              placeholder="Your message"
            ></textarea>
            <label
              htmlFor="ok"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Example textarea
            </label>
          </div>
          <div>Word count: {count}</div>
        </div>
      </main>
    </>
  );
}

export default App;
