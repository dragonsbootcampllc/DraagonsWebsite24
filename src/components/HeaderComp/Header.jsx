import Image from "next/image";
import Link from "next/link";

function Header(props) {
  return (
    <div
      style={{
        border: "1px solid rgb(255,255,255,0.05)",
      }}
      className={`${"text-amber-50  h-[88px] z-50   bg-[#030014]/40  grid-cols-1  md:grid-cols-3 place-items-center grid fixed w-[100%] backdrop-blur-3xl"} ${"select-none"}`}
    >
      <div className={`${"Mobol_Logo "} ${"  md:hidden block py-2 "}`}>
        <div className={"flex gap-1"}>
          <Link className={`${"flex relative"}`} href="/" passHref>
            <Image
              src="Identity/Images/2023/SVG/test.svg"
              alt="logo"
              className={`${" h-[20px] "}`}
              priority={true}
              width={100}
              height={20}
            />{" "}
          </Link>

          <div
            className={
              "border-2 p-2 text-xs select-none hover:bg-fuchsia-800 duration-300 cursor-pointer  justify-center text-center grid place-items-center m-auto h-6 w-12 relative rounded-full"
            }
          >
            <span className={"absolute"}>DEMO</span>
          </div>
        </div>
      </div>
      <div className={` ${"hidden md:flex gap-1  "}`}>
        <Link className={`${"flex relative"}`} href="/" passHref>
          <span className={`${"text-amber-50 uppercase "}`}>
            <Image
              src="Identity/Images/2023/SVG/test.svg"
              alt="logo"
              className={`${" h-[60px] "}`}
              width={150}
              height={20}
            />
          </span>
        </Link>
        <div
          className={
            "border-2 p-2 text-xs select-none hover:bg-fuchsia-800 duration-300 cursor-pointer  justify-center text-center grid place-items-center m-auto h-6 w-12 relative rounded-full"
          }
        >
          <span className={"absolute"}>DEMO</span>
        </div>
      </div>
      <div
        className={`${"max-w-[400px] min-w-[350px]   grid   h-[44px] rounded-full bg-gray-400/5 border-[0.01rem] border-gray-200/10 "} ${"select-none"}`}
      >
        <ul
          className={`${"flex justify-around place-items-center gap-5 px-3 "}${" font-light text-gray-200 hover:text-white"}${" select-none cursor-pointer"}`}
        >
          {props.nav_links.map((nav_link) => (
            <li key={nav_link.id}>
              <Link href={nav_link.link} passHref>
                <span
                  style={{ fontFamily: "interV" }}
                  className={`${"text-amber-50 text-sm md:text-lg capitalize "}`}
                >
                  {nav_link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className={`${"w-[100px] md:grid hidden place-items-center  h-[44px] "}${" shadow-inner shadow-3xl shadow-purple-700 hover:shadow-purple-400 duration-500 rounded-full bg-purple-900/5 "}${"select-none"}`}
        >
          {props.Join.map((Join) => (
            <Link key={Join.id} href={Join.link} passHref>
              <span
                style={{ fontFamily: "interV" }}
                className={`${" text-amber-50 capitalize "}`}
              >
                {Join.name}
              </span>
            </Link>
          ))}
        </button>
      </div>
    </div>
  );
}

export default Header;
