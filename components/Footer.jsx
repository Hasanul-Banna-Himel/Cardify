import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current">
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.71-.562-2.004-1.444l-.841-2.518-2.431.812c-1.151.393-2.416-.234-2.812-1.387-.392-1.151.231-2.416 1.384-2.809l2.432-.811-.978-2.93-2.432.812c-1.151.392-2.416-.233-2.809-1.387-.393-1.15.231-2.414 1.384-2.807l2.432-.812-.841-2.517c-.33-1.018.209-2.126 1.23-2.456 1.017-.326 2.127.208 2.456 1.226l.841 2.518 5.011-1.679-.841-2.518c-.391-1.202.434-2.54 1.831-2.54.88 0 1.71.561 2.003 1.442l.842 2.518 2.432-.811c1.151-.393 2.417.232 2.81 1.387.393 1.151-.232 2.415-1.384 2.808l-2.432.812.977 2.93 2.431-.811c1.153-.393 2.416.231 2.811 1.387.395 1.152-.23 2.417-1.383 2.809zm-9.116-1.056l-2.085-6.236-5.013 1.677 2.085 6.234 5.013-1.675z"
          />
        </svg>
        <p>
          Cardify Inc.<br />
          Making Learning Simple.
        </p>
      </aside>
      <aside>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
        <a href="https://www.linkedin.com/in/hasanul-banna-himel/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-6.5 19h-3v-8h3v8zm-1.5-9.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm10 9.268h-3v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4h-3v-8h3v1.085c.414-.544 1.09-.916 1.871-.916 1.379 0 2.5 1.121 2.5 2.5v5.331z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/obidur-rahman-shawal/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-6.5 19h-3v-8h3v8zm-1.5-9.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm10 9.268h-3v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4h-3v-8h3v1.085c.414-.544 1.09-.916 1.871-.916 1.379 0 2.5 1.121 2.5 2.5v5.331z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mehreen-mallick-fiona/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-6.5 19h-3v-8h3v8zm-1.5-9.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm10 9.268h-3v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4h-3v-8h3v1.085c.414-.544 1.09-.916 1.871-.916 1.379 0 2.5 1.121 2.5 2.5v5.331z"
              />
            </svg>
          </a>
        </div>
      </aside>
    </footer>
  );
}
