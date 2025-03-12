import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-thoughtscribe-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-thoughtscribe-grey-dark">
            © {new Date().getFullYear()} ThoughtScribe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-thoughtscribe-grey-dark hover:text-thoughtscribe-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-thoughtscribe-grey-dark hover:text-thoughtscribe-primary"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/contact"
              className="text-thoughtscribe-grey-dark hover:text-thoughtscribe-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
