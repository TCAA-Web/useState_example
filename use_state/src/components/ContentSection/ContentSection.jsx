import { useState } from "react";
import style from "./ContentSection.module.scss";

export const ContentSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <section className={isDarkMode ? style.contentStyleDark : style.contentStyleLight} >
      <h3>Hej det her er min side</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptas
        dolore assumenda possimus error, eius, saepe necessitatibus enim cumque
        autem laboriosam ipsam officiis iure exercitationem praesentium vero
        repudiandae quas nam.
      </p>
      <button className={isDarkMode ? style.buttonStyleDark : style.buttonStyleLight} onClick={() => setIsDarkMode(isDarkMode ? false : true)}>
        {isDarkMode ? "Dark mode" : "Light mode"}
      </button>
    </section>
  );
};
