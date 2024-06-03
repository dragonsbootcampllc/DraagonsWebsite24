import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Header(props) {
  const [navbarVisibility, setNavbarVisibility] = useState("");
  const [burgerMenu, setBurgerMenu] = useState(false);

  const changenavbg = () => {
    setNavbarVisibility(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changenavbg);
    return () => window.removeEventListener("scroll", changenavbg);
  });

  const toggler = () => {
    setBurgerMenu(!burgerMenu);
    let x = document.getElementById("togglerDiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  return (
    <div
      className={
        navbarVisibility
          ? "   active z-50  justify-center bglolh fixed backdrop-blur-xl bg-gray-900/60 drop-shadow-lg shadow-gray-900	  w-full "
          : "   z-50  justify-center bglolh fixed backdrop-blur-xl   w-full "
      }
    >
      <div className="px-4  grid grid-cols-3 py-3 max-w-[1400px] mx-auto  w-full    h-[70px]">
        <Link href={props.herflogoLink} passHref>
          <div className="mt-2 flex gap-1 hover:opacity-50  duration-700  select-none cursor-pointer ">
            <Image
              className="hover:animate-spin md:block hidden  duration-500"
              src={props.herflogo}
              alt="Dragons"
              height="50"
              width="50"
              priority
              quality={100}
            />{" "}
            <div className="pt-[10px] ">
              <Image
                className="  "
                src={props.herflogo2}
                alt="Dragons"
                height="30"
                width="120"
                priority
                quality={100}
              />{" "}
            </div>
          </div>
        </Link>
        <div className="lg:flex pt-3 hidden text-stone-100 select-none cursor-pointer  gap-4 justify-center mx-8">
          <Link href={props.HerfService} passHref>
            <h5 className="duration-500 hover:text-gray-500">Team</h5>
          </Link>
          <Link href={props.HerfActivity} passHref>
            <h5 className="duration-500 hover:text-gray-500">Activities</h5>
          </Link>
        </div>
        <div className="flex pt-2  text-gray-200   gap-4 justify-end mx-8">
          <div
            onClick={toggler}
            className="block active:bg-slate-600/30 duration-300 rounded-full p-2 lg:hidden absolute  right-7"
          >
            {" "}
            {burgerMenu ? (
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="22px"
                height="22px"
                viewBox="0 0 460.775 460.775"
                style={{ enableBackground: "new 0 0 460.775 460.775" }}
                xmlSpace="preserve"
              >
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(100%,100%,100%)",
                    fillOpacity: 1,
                  }}
                  d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            ) : (
              <svg
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "rgb(100%,100%,100%)",
                  fillOpacity: 1,
                }}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                width="22px"
                height="22px"
              >
                <g id="surface38562724">
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(100%,100%,100%)",
                      fillOpacity: 1,
                    }}
                    d="M 1.5 3 L 1.5 4.5 L 21 4.5 L 21 3 Z M 1.5 10.5 L 1.5 12 L 21 12 L 21 10.5 Z M 1.5 18 L 1.5 19.5 L 21 19.5 L 21 18 Z M 1.5 18 "
                  />
                </g>
              </svg>
            )}
          </div>
          <div className="relative">
            <div className=" ">
              <div className="lg:flex  gap-3 hidden ">
                <div className="duration-500 active:scale-95  hover:text-gray-400">
                  {" "}
                  <Link href={props.herfFacebook} passHref>
                    <svg
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="25px"
                      height="25px"
                      className="opacity-50 mt-1 hover:opacity-30 duration-300"
                    >
                      {" "}
                      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                    </svg>
                  </Link>
                </div>
                <div className="duration-500 active:scale-95  hover:text-gray-400">
                  <Link href={props.herfGithub} passHref>
                    <svg
                      version="1.1"
                      id="Capa_1"
                      width="25px"
                      height="25px"
                      className="opacity-50 mt-1 hover:opacity-30 duration-300"
                      viewBox="0 0 438.549 438.549"
                    >
                      <g>
                        <path
                          fill="white"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"
                        />
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </Link>
                </div>

                <button className=" hover:text-white box-decoration-slice shadow-md hover:shadow-red-500/40    focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-300 focus:ring-offset-slate-800  font-bold h-9 px-6 rounded-lg w-full flex items-center text-gray-900 justify-center sm:w-auto bg-gray-200  hover:bg-red-400">
                  <Link href={props.HerfDash} passHref>
                    <h4 className="m-auto font-bold text-gray-900 hover:text-gray-900">
                      Join Us
                    </h4>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="togglerDiv"
        className=" absolute TogglerDisplay lg:hidden uppercase h-screen lg:h-0 right-0 rounded-b-xl  max-w-[600px]  bg-gray-900  w-full"
      >
        <div className=" select-none mx-12  cursor-pointer  m-3 text-center lg:hidden">
          <Link className="text-gray-300" href={props.HerfService} passHref>
            <div
              onClick={toggler}
              className="  hover:bg-gray-800/40 duration-300 py-2 text-xl font-semibold text-gray-300 rounded-xl"
            >
              Team
            </div>
          </Link>
        </div>
        <div className=" select-none mx-12  cursor-pointer  m-3 text-center lg:hidden">
          <Link className="text-gray-300" href={props.HerfActivity} passHref>
            <div
              onClick={toggler}
              className="  hover:bg-gray-800/40 duration-300 py-2 text-xl font-semibold text-gray-300 rounded-xl"
            >
              Activities
            </div>
          </Link>
        </div>

        <div className=" select-none mx-12 cursor-pointer  m-3 text-center lg:hidden">
          <Link className="text-gray-300" href={props.HerfDash} passHref>
            <div
              onClick={toggler}
              className="bg-gray-300 justify-center flex  hover:bg-red-400 duration-300 pt-2 text-xl font-semibold text-gray-900 rounded-xl"
            >
              <span>Join Us</span>
            </div>
          </Link>
        </div>
        <div className=" select-none justify-content justify-center   grid grid-cols-2 gap-2 mx-12 cursor-pointer  m-3 text-center lg:hidden"></div>
      </div>
    </div>
  );
}

export default Header;
