import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811..."></path>
        </svg>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {[...Array(4)].map((_, i) => (
            <a key={i} href="#" aria-label={`LinkedIn profile ${i + 1}`}>
              <FaLinkedin size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
