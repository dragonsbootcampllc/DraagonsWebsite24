import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Identity/logotext.png";
import ButtonComponent from "./Micros/Button";

const Footer = () => {
  return (
    <footer className="mt-4 min-h-full flex flex-col justify-center items-center h-full">
      <div className="flex justify-between min-h-[70vh] p-8 bg-center bg-no-repeat flex-wrap">
        <div className="md:w-1/4 w-full px-2">
          <Image
            src={logo}
            alt="Logo"
            className="mb-4"
            width={200}
            height={200}
          />
          <h2 className="text-white font-bold text-2xl">Ready for Sprint?</h2>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            iusto officia vitae sed illo sunt similique soluta perspiciatis
            quisquam dolor possimus ab, nobis voluptatem ratione explicabo
            numquam, accusamus autem debitis!
          </p>
        </div>
        <div className="md:w-1/4 w-full px-2 text-center">
          <h2 className="text-white font-bold text-2xl mb-4">Pages</h2>
          <ul>
            <li className="mt-2">
              <Link href="#" className="text-[#80AB9E]">
                Page1
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="text-[#80AB9E]">
                Page2
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="text-[#80AB9E]">
                Page3
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 w-full px-2 text-center">
          <h2 className="text-white font-bold text-2xl mb-4">Legal</h2>
          <ul>
            <li className="mt-2">
              <Link href="/privacy-policy" className="text-[#80AB9E]">
                Privacy Policy
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/terms-of-service" className="text-[#80AB9E]">
                Terms of Service
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/cookie-policy" className="text-[#80AB9E]">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 w-full px-2 text-center">
          <h2 className="text-white font-bold text-2xl mb-4">Social Media</h2>
          <div className="flex justify-center gap-4">
            <p>
              <Link href="https://github.com/TutTrue">
                <span className="border-2 inline-block border-white text-white p-2 rounded-full">
                  <svg
                    class="text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="1rem"
                    height="1rem"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </p>
            <p>
              <Link href="#">
                <span className="border-2 inline-block border-white text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>{" "}
                </span>
              </Link>
            </p>
            <p>
              <Link href="#">
                <span className="border-2 inline-block border-white text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    ></path>
                  </svg>{" "}
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Link href="/Pricing" passHref>
        <div className="h-16 w-64">
          <ButtonComponent CTAtext={"Let's Get Started"} />
        </div>
      </Link>
      <div className="text-white text-center mt-8">
        <p>All rights reserved@2024</p>
        <p className="flex justify-center items-center gap-2">
          Powered by Dragonsbootcampllc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
