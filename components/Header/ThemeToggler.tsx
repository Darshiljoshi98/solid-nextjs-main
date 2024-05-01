import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {/* <button
        aria-label="theme toggler"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
      >
        <Image
          src="/images/icon/icon-moon.svg"
          alt="logo"
          width={21}
          height={21}
          className="dark:hidden"
        />

        <Image
          src="/images/icon/icon-sun.svg"
          alt="logo"
          width={22}
          height={22}
          className="hidden dark:block"
        />
      </button> */}

<div className="animate-pulse">
      <a href="tel:+91 7874074605" className=" font-semibold DescriptionTextColor"> +91 7874074605</a>
</div>

    </div>
  );
};

export default ThemeToggler;
