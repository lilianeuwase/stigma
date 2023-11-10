import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconName } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="/getinvolved">about us</a>
              </li>
              <li>
                <a href="/">our services</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              {/* <li>
                <a href="/faq">FAQ</a>
              </li> */}
              <li>
                <a href="getinvolved">get involved</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>follow us</h4>

            <div class="social-links">
              <a href="#">
                <FaFacebookF className="centered" />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Supported by</h4>
            <div class="social-links">
              <a href="https://www.rwandayvchange.org/" target="_blank">
                <img src={require("../images/ryvc.png")} />
              </a>
              <a href="https://www.makeinroads.org/" target="_blank">
                <img src={require("../images/inroads logo.png")} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-white">
        © 2023 Copyright:{" "}
        <a className="text-reset fw-bold" href="/">
          Abortion Stigma
        </a>
        <br />
        <br />
        <span className="text-gray-400">
          Website designed & developed by{" "}
          <a
            href="https://8linescode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            8 Lines Code Ltd.
          </a>
        </span>
      </div>
    </footer>
  );
}
