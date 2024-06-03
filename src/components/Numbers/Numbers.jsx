import Styles from "./Numbers.module.css";

export const Numbers = () => {
  const Status = [
    {
      id: 1,
      title: "4100+",
      paragraph: "STUDENTS ENROLLED\n",
    },
    {
      id: 2,
      title: "73+",
      paragraph: "Company partners",
    },
    {
      id: 3,
      title: "2715+",
      paragraph: "HOURS OF LEARNING \n",
    },
    {
      id: 4,
      title: "75+",
      paragraph: "PROJECTS COMPLETED\n",
    },
  ];

  return (
    <div className={"w-full flex justify-center m-auto"}>
      <div
        className={
          "backdrop-blur-xl relative w-full max-w-6xl bg-purple-100/5 rounded-t-2xl  min-h-[100px]  overflow-clip "
        }
      >
        <div
          className={`${Styles.status_section} ${"w-full h-full relative  "}`}
        >
          <ul
            className={
              " grid place-items-center relative place-content-center text-center md:grid-cols-4"
            }
          >
            {Status.map((status) => (
              <div key={status.id} className={` ${Styles.element}  ${""}`}>
                <h1 className={` ${Styles.element_h1} ${" font-bold  "}`}>
                  {status.title}
                </h1>
                <p className={` ${Styles.element_p} ${""}`}>
                  {status.paragraph}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
